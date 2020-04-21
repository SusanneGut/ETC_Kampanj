import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "../components/button"
import Checkbox from "../components/checkbox"
import media from "styled-media-query"
import { navigate, Link } from "gatsby"

// formatDate : Date -> String
const formatDate = date => date.toISOString().split("T")[0]

const status = {
  EDITING: "EDITING",
  POSTING: "POSTING",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
}

export default class OrderFormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: status.EDITING,
      errorString: null,
      formData: {
        behåll_nummer: false,
        återvinn_gammal_telefon: false,
        email: "",
        förnamn: "",
        efternamn: "",
        kundtyp: "",
        personnummer_eller_organisationsnummer: "",
        startdatum: formatDate(new Date()),
        gatuadress: "",
        postort: "",
        postnummer: "",
        telefonnummer: "",
        jag_godkänner_villkoren: false,
      },
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    const newFormData = Object.assign({}, this.state.formData, {
      [name]: value,
    })

    this.setState({
      formData: newFormData,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ status: status.POSTING })

    fetch(event.target.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.formData),
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ status: status.COMPLETED })
        navigate(this.props.redirectToAfterSubmit)
      })
      .catch(error => {
        console.error("Error:", error)
        this.setState({ status: status.ERROR, errorString: error })
      })
  }

  render() {
    switch (this.state.status) {
      case status.COMPLETED:
        return this.renderCompleted()

      case status.POSTING:
        return this.renderPosting()

      case status.ERROR:
        return this.renderError()

      case status.EDITING:
        return this.renderForm()

      default:
        return this.renderForm()
    }
  }

  renderCompleted() {
    // This is only shown briefly. The `handleSubmit` function redirects
    // to a separate page when submission has been posted.
    return (
      <div>
        <StyledHeadingLarge>Klart!</StyledHeadingLarge>
      </div>
    )
  }

  renderPosting() {
    return <StyledHeadingLarge>Skickar…</StyledHeadingLarge>
  }

  renderError() {
    return <div>{`Ett fel uppstod: ${this.state.errorString}`}</div>
  }

  renderForm() {
    const numberFormatter = new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
    })

    const {
      plan: selectedPlanId,
      telefon: selectedPhoneId,
    } = this.state.formData
    const selectedPlan = this.props.plans.find(
      plan => plan.id === selectedPlanId
    )

    const pricePerMonth = selectedPlan
      ? numberFormatter.format(selectedPlan.price)
      : "–"

    const selectedPhone = this.props.phones.find(
      phone => phone.id === selectedPhoneId
    )

    const initialPrice = selectedPhone
      ? numberFormatter.format(selectedPhone.price)
      : "–"

    return (
      <div className={this.props.className}>
        <form
          method="POST"
          action="https://getform.io/f/203dd193-5c70-4445-9890-98bdba209ef6"
          onSubmit={this.handleSubmit}
        >
          <Column spacing="30px">
            <StyledFieldset>
              <Column spacing="20px">
                <StyledLegend>Beställning</StyledLegend>

                <Row spacing="10px" alignItems="baseline">
                  <Checkbox
                    name="behåll_nummer"
                    id="behåll_nummer"
                    checked={this.state.formData.behåll_nummer}
                    onChange={this.handleInputChange}
                  />
                  <StyledLabel htmlFor="behåll_nummer">
                    Behåll nuvarande nummer
                  </StyledLabel>
                </Row>

                <div>
                  <StyledLabel htmlFor="startdatum">
                    Startdatum för abbonemang
                  </StyledLabel>
                  <StyledInput
                    type="date"
                    name="startdatum"
                    value={this.state.formData.startdatum}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <StyledSelect
                  name="telefon"
                  value={this.state.formData.telefon}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value="">Val av telefon</option>
                  {this.props.phones.map(phone => (
                    <option key={phone.id} value={phone.id}>
                      {phone.title}
                    </option>
                  ))}
                </StyledSelect>

                <StyledSelect
                  name="plan"
                  value={this.state.formData.plan}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value="">Val av abbonemang</option>
                  {this.props.plans.map(plan => (
                    <option key={plan.id} value={plan.id}>
                      {plan.title}
                    </option>
                  ))}
                </StyledSelect>

                <Row spacing="10px" alignItems="baseline">
                  <Checkbox
                    name="återvinn_gammal_telefon"
                    id="återvinn_gammal_telefon"
                    checked={this.state.formData.återvinn_gammal_telefon}
                    onChange={this.handleInputChange}
                  />

                  <StyledLabel htmlFor="återvinn_gammal_telefon">
                    Återvinn min gamla telefon.{" "}
                    <Link to={this.props.linkRecycling}>
                      Läs mer om vårt återvinningsprogram.
                    </Link>
                  </StyledLabel>
                </Row>
              </Column>
            </StyledFieldset>
            <hr />
            <StyledFieldset>
              <Column spacing="20px">
                <StyledLegend>Leverans</StyledLegend>

                <ResponsiveRow spacing="30px" spacingCollapsed="0px">
                  <Row spacing="10px" alignItems="center">
                    <StyledRadioButtonInput
                      type="radio"
                      id="consumer"
                      name="kundtyp"
                      value="privatkund"
                      checked={this.state.formData.kundtyp === "privatkund"}
                      onChange={this.handleInputChange}
                      required
                    />
                    <StyledLabel htmlFor="consumer">Privatkund</StyledLabel>
                  </Row>
                  <Row spacing="10px" alignItems="center">
                    <StyledRadioButtonInput
                      type="radio"
                      id="company"
                      name="kundtyp"
                      value="företagskund"
                      checked={this.state.formData.kundtyp === "företagskund"}
                      onChange={this.handleInputChange}
                      required
                    />
                    <StyledLabel htmlFor="company">Företag</StyledLabel>
                  </Row>
                </ResponsiveRow>

                <ResponsiveRow spacing="30px" spacingCollapsed="20px">
                  <Column>
                    <StyledLabel htmlFor="förnamn">Förnamn</StyledLabel>
                    <StyledInput
                      name="förnamn"
                      id="förnamn"
                      value={this.state.formData.förnamn}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Column>
                  <Column>
                    <StyledLabel htmlFor="efternamn">Efternamn</StyledLabel>
                    <StyledInput
                      name="efternamn"
                      id="efternamn"
                      value={this.state.formData.efternamn}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Column>
                </ResponsiveRow>
                <div>
                  <StyledLabel htmlFor="personnummer_eller_organisationsnummer">
                    Personnummer / organisationsnummer
                  </StyledLabel>
                  <StyledInput
                    id="personnummer_eller_organisationsnummer"
                    name="personnummer_eller_organisationsnummer"
                    value={
                      this.state.formData.personnummer_eller_organisationsnummer
                    }
                    onChange={this.handleInputChange}
                    placeholder="Ange personnr. eller organisationsnr."
                    required
                  />
                </div>
                <div>
                  <StyledLabel htmlFor="gatuadress">Gatuadress</StyledLabel>
                  <StyledInput
                    name="gatuadress"
                    id="gatuadress"
                    value={this.state.formData.gatuadress}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <ResponsiveRow spacing="30px" spacingCollapsed="20px">
                  <Column>
                    <StyledLabel htmlFor="postnummer">Postnummer</StyledLabel>
                    <StyledInput
                      name="postnummer"
                      id="postnummer"
                      value={this.state.formData.postnummer}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Column>
                  <Column>
                    <StyledLabel htmlFor="postort">Postort</StyledLabel>
                    <StyledInput
                      name="postort"
                      id="postort"
                      value={this.state.formData.postort}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Column>
                </ResponsiveRow>
                <ResponsiveRow spacing="30px" spacingCollapsed="20px">
                  <Column>
                    <StyledLabel htmlFor="telefonnummer">
                      Telefonnummer
                    </StyledLabel>
                    <StyledInput
                      type="tel"
                      name="telefonnummer"
                      id="telefonnummer"
                      value={this.state.formData.telefonnummer}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Column>
                  <Column>
                    <StyledLabel htmlFor="email">E-postadress</StyledLabel>
                    <StyledInput
                      name="email"
                      id="email"
                      type="email"
                      value={this.state.formData.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Column>
                </ResponsiveRow>
              </Column>
            </StyledFieldset>
            <hr />
            <Column spacing="10px">
              <SummaryHeading>Pris per månad</SummaryHeading>
              <Summary>{pricePerMonth}</Summary>
            </Column>
            <Column spacing="10px">
              <SummaryHeading>Engångskostnad</SummaryHeading>
              <Summary>{initialPrice}</Summary>
            </Column>
            <hr />
            <Row spacing="10px" alignItems="baseline">
              <Checkbox
                name="jag_godkänner_villkoren"
                id="jag_godkänner_villkoren"
                checked={this.state.formData.jag_godkänner_villkoren}
                onChange={this.handleInputChange}
                required
              />
              <StyledLabel htmlFor="jag_godkänner_villkoren">
                Genom att beställa så godkänner du de allmäna avtalsvillkoren
                för ETC Mobil.{" "}
                <Link to={this.props.linkTerms}>
                  Läs våra avtalsvillkor här.
                </Link>
              </StyledLabel>
            </Row>
            <Row justifyContent="flex-end">
              <div />
              <StyledButton type="submit">Beställ</StyledButton>
            </Row>
          </Column>
        </form>
      </div>
    )
  }
}

OrderFormComponent.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,

  phones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,

  redirectToAfterSubmit: PropTypes.string.isRequired,
  linkRecycling: PropTypes.string.isRequired,
  linkTerms: PropTypes.string.isRequired,
}

const Column = props => (
  <StyledColumn>
    {intersperse(
      <Spacer height={props.spacing} />,
      props.children
    ).map((child, i) => React.cloneElement(child, { key: `element-${i}` }))}
  </StyledColumn>
)

const Row = props => (
  <StyledRow
    alignItems={props.alignItems}
    justifyContent={props.justifyContent}
  >
    {intersperse(
      <Spacer width={props.spacing} />,
      props.children
    ).map((child, i) => React.cloneElement(child, { key: `element-${i}` }))}
  </StyledRow>
)

const ResponsiveRow = props => (
  <StyledResponsiveRow
    alignItems={props.alignItems}
    justifyContent={props.justifyContent}
  >
    {intersperse(
      <Spacer width={props.spacing} heightCollapsed={props.spacingCollapsed} />,
      props.children
    ).map((child, i) => React.cloneElement(child, { key: `element-${i}` }))}
  </StyledResponsiveRow>
)

const Spacer = styled.div`
  width: ${props => props.widthCollapsed || props.width || "auto"};
  height: ${props => props.heightCollapsed || props.height || "auto"};
  flex-shrink: 0;

  ${media.greaterThan("768px")`
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
  `}
`

const intersperse = (separator, list) =>
  list.length < 2 ? list : [].concat(...list.map(e => [separator, e])).slice(1)

const StyledLabel = styled.label`
  color: #3e4462;
  letter-spacing: -0.09px;
  font-family: "StagSans-book";
  font-size: 18px;
  line-height: 26px;
  display: block;
`

const StyledInput = styled.input`
  margin: 0;
  padding: 0.5em;
  color: #3e4462;
  background: #eff2f6;
  border-radius: 8px;
  border: none;
  letter-spacing: -0.09px;
  font-family: "StagSans-book";
  font-size: 18px;
  line-height: 26px;
  display: block;
  width: 100%;
  box-sizing: border-box;
`

const StyledSelect = styled.select`
  appearance: none;
  margin: 0;
  padding: 0.5em;
  color: #3e4462;
  background: #eff2f6;
  border-radius: 8px;
  border: none;
  letter-spacing: -0.09px;
  font-size: 18px;
  line-height: 26px;
  display: block;
  width: 100%;
  box-sizing: border-box;
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  align-items: ${props => props.alignItems || "auto"};
  justify-content: ${props => props.justifyContent || "normal"};
`

const StyledResponsiveRow = styled(StyledRow)`
  flex-direction: column;

  ${media.greaterThan("768px")`
    flex-direction: row;
  `}
`

const StyledFieldset = styled.fieldset`
  border: 0;
  padding: 0 0 0 0;
  margin: 0;
  min-width: 0;
`

const StyledLegend = styled.legend`
  display: table;
  margin: 0;
  padding: 0;
  width: 100%;

  font-family: "Stag-semibold";
  font-size: 36px;
  line-height: 44px;
  color: #18214d;
`

const StyledHeadingLarge = styled.h1`
  margin: 0;
  padding: 0;

  font-family: "Stag-semibold";
  font-size: 52px;
  line-height: 62px;
  color: #18214d;
`

const StyledRadioButtonInput = styled.input`
  margin: 0;
  display: block;
`

const SummaryHeading = styled.h2`
  margin: 0;
  font-family: "StagSans-medium";
  font-size: 28px;
  line-height: 44px;
  letter-spacing: 0px;
  color: #18214d;
`

const Summary = styled.p`
  margin: 0;
  font-family: "Stag-semibold";

  font-size: 56px;
  line-height: 56px;
  letter-spacing: 0px;
  color: #18214d;
`

const StyledButton = styled(Button)``
