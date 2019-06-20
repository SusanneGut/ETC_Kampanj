import React from "react"


export default class MobilesubscriptionFormComponent1 extends React.Component{

    state={
        sameNumber: true,
        mail: "",
        firstName:"",
        lastName:"",
        privatperson: true,
        foretag: false,
        address: "",
        city:"",
        postalnum:"",
        phone: ""

    }

    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
        [name]:value,
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        alert(`Thank you ${this.state.firstName}!`)
    }

  
    render(){
        return(
            <form>
              temp place<br/>
              <label style={{fontSize: "11px"}}> Behåll nuvarande nummer
              <input type="checkbox" name= "sameNumber" checked={this.state.sameNumber}
              onChange={this.handleInputChange}/></label>
              <br/>
              <input type="email" name="mail" value={this.state.mail}
              onChange={this.handleInputChange} placeholder="mejl"/>
                <br/>
                <input type="text" name="firstName" value={this.state.firstName}
                onChange={this.handleInputChange} placeholder="förnamn"/>
                <input type="text" name="lastName" value={this.state.lastName}
                onChange={this.handleInputChange} placeholder="efternamn"/>
                <br/>
                <label style={{fontSize: "11px"}}> Privatperson
              <input type="checkbox" name= "privatperson" checked={this.state.privatperson}
              onChange={this.handleInputChange}/></label>
              <label style={{fontSize: "11px"}}> Företag
              <input type="checkbox" name= "foretag" checked={this.state.foretag}
              onChange={this.handleInputChange}/></label>
              <br/>

              <label>Leveransadress
              <br/>
              <input type="address" name="address" value={this.state.address}
              onChange={this.handleInputChange} placeholder="gatuadress"/>
                <br/>
                <input type="city" name="city" value={this.state.city}
              onChange={this.handleInputChange} placeholder="postort"/>
                <br/>
                <input type="postalnum" name="postalnum" value={this.state.postalnum}
              onChange={this.handleInputChange} placeholder="postnummer"/>
                <input type="phone" name="phone" value={this.state.phone}
              onChange={this.handleInputChange} placeholder="telefonnummer"/>
                <br/>
              </label>
              
              <button type="submit">Beställ</button>

            </form>
          )
    }
}



