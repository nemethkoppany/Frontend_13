export default async function versenyzokLoader(){
    try{
        const response = await fetch("http://localhost:3000/versenyzok");

        const respData = await response.json();
        const rendezett = respData.sort((a, b) => {
            const szakma = a.szakmaNev.localeCompare(b.szakmaNev);
            if(szakma !== 0){
                return szakma;
            }
            return Number(b.pont) - Number(a.pont);
        })
        return rendezett;
    }
    catch(err){
        console.log(err);
        throw new Error("Hiba a termékek betöltése közben!");
    }
} 