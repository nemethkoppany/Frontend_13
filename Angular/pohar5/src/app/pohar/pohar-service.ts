import { Injectable, signal } from "@angular/core";
import { IPohar } from "./pohar-model";
import { dummyPohar } from "../dummy-pohar";

@Injectable({providedIn:"root"})
export class PoharService{

    private pohar = signal<IPohar[]>(dummyPohar)

    listaz(){
        return this.pohar();
    }

    felvesz(ujPohar:IPohar){
        this.pohar.set([...this.pohar(),ujPohar])
    }

    torol(id:number){
        this.pohar.set(this.pohar().filter(t => t.id != id))
    }
}