import { IPohar } from "./pohar-model";
import { Injectable, signal } from "@angular/core";
import { dummypohar } from "../dummyPohar";

@Injectable({providedIn:"root"})
export class poharService{
 
    
    private pohar = signal<IPohar[]>(dummypohar);

    listaz(){
        return this.pohar();
    }

    felvesz(ujPohar:IPohar){
        this.pohar.set([...this.pohar(),ujPohar])
    }

    torol(id:Number){
        this.pohar.set(this.pohar().filter(t => t.id != id))
    }

}