import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  private _type: string;
  private _value: string;
  public paragraphe: string = "Valeur du paragraphe avant évènement";

  constructor() {
    this._type = "text";
    this._value = "Default value";
  }

  public get type(): string {
    return this._type;
  }

  public get value(): string {
    return this._value;
  }

  ngOnInit(): void {}
}
