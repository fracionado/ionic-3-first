import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //Em typescrypy pode-se colocar o tipo da váriavel restringindo sua capacidade
  //public nome_usuario:string - nome_usuario:any (aceita qq conteudo)
  public nome_usuario:string = "nome teste do código TS";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public mostraAlert(): void{
     //alert("minha função passou!");
     //alert(5 + 10);
    }

    public somaDoisNumeros(num1:number, num2:number): void{
      //alert(num1 + num2);
     }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

    this.mostraAlert();
    this.somaDoisNumeros(11, 85);
  }

}
