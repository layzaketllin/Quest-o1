import { LightningElement } from "lwc";

export default class App extends LightningElement {
  name = "Layza Damaso";
  phone = "11 99999 9999";
  cpf = "111.222.333-44";
  age = 24;

  email = "layket@bol.com";
  instagram = "@layza_damaso";
  twitter = "layzadama";
  visible = true;

  

changeData(){
  
  this.visible = !this.visible;
  
}

changeData(){
  this.name = "Lucas Damaso";
  this.phone = "3036-1617";
  this.cpf = "000.000.000-10";
  this.age = 30;


  }

}