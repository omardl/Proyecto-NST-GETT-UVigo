import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public isIdentified: boolean = false;
  public ethereum: any;
  public isConnected: boolean = false;
  public ownerAddress: string = '';
  constructor() {}

  ngOnInit() {
    if (this.checkIfMetamaskInstalled()) {
      this.isIdentified = true;

     // if (this.checkIfMetamaskConnected()) {
     //   this.connected();
     // }

     if (this.ethereum) {
      this.connectMetamask();
      }
    }
  }
  private checkIfMetamaskInstalled(): boolean {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.ethereum = (window as any).ethereum;
      return true;
    }
    return false;
  }

 /* private checkIfMetamaskConnected(): boolean {
    if (localStorage.getItem(this.METAMASK_KEY)) {
      return true;
    }
    return false;
  }*/

 /* private storeMetamask() {
    localStorage.setItem(this.METAMASK_KEY, this.ownerAddress);
  }*/

  private connected() {
    this.isConnected = true;
  }

  public async connectMetamask() {
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    this.ownerAddress = account;
    //this.storeMetamask();
    this.connected();
  }
}
