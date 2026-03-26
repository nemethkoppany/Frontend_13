import { Injectable,signal } from "@angular/core";
import { Ipohar } from "./pohar-model";
import { dummypohar } from "../dummy-pohar";

@Injectable({providedIn:"root"})
export class PoharService{
    private pohar = signal<Ipohar[]>(dummypohar)

    listaz(){
        return this.pohar()
    }

    felvesz(ujPohar:Ipohar){
        this.pohar.set([...this.pohar(),ujPohar])
    }

    torol(id:number){
        this.pohar.set(this.pohar().filter(t => t.id != id))
    }
}