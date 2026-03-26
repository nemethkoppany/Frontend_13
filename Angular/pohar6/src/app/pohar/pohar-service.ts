import { signal, Injectable } from "@angular/core";
import { dummyPohar } from "../dummy-pohar";
import { IPohar } from "./pohar-model";


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
        this.pohar.set(this.pohar().filter(t=>t.id != id))
    }
}