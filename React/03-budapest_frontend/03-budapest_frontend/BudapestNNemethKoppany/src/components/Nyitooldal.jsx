import { Link } from "react-router-dom";
import kep from "../assets/budapest.png";

export default function Nyitooldal() {
  return (
    <div>
      <header>
        <h1>Budapest népessége</h1>
        <div>
          <div>
            <Link to="/adatok" className="btn btn-info">
              Lakosság a népszámlások alkalmával
            </Link>
          </div>
          <div>
            <Link to="/ujadat" className="btn btn-warning">Új felmérés felvétele</Link>
          </div>
        </div>
      </header>
      <section>
        <p>
          Budapest népessége 2011. január 1-jén 1 733 685 fő volt, ami közel
          három évtizedes csökkenés után újra növekszik a csökkenő mértékű
          természetes fogyás és a növekvő bevándorlás következtében, a
          lakónépesség a 2007-es mélypont óta közel 40 000 fővel gyarapodott.[1]
          2010. január 1-jén 889 757 lakást tartottak számon a főváros
          közigazgatási területén. Nyelvileg, etnikailag a népesség viszonylag
          homogénnek tekinthető, azonban az elmúlt húsz évben jelentősen
          növekedett a külföldiek és a romák aránya, előbbiek 4,4, utóbbiak
          4,6%-kot képviselnek a főváros teljes lakosságából.[2] A budapesti
          agglomerációban 2010. január 1-jén 2 524 697 fő élt (az ország
          összlakosságának több, mint egynegyede), míg a budapesti
          várostérségben hozzávetőlegesen 3,5 millió fő,[3] ezzel a magyar
          főváros a legnépesebb nagyvárosi övezet Kelet-Közép-Európában.
        </p>
        <h1>Anyanyelvi- és nemzetiségi megoszlás</h1>
        <p>
          A korai újkor előtti időkből kevés forrás áll rendelkezésünkre
          Magyarország és a mai Budapest etnikai arculatáról, ezek közül az
          egyik a Magyar Királyi Kincstár 1494-95-ös, az egész országra
          kiterjedő összeírása. E szerint Buda, Pest, Óbuda és a főváros teljes
          mai területe magyar többségű volt, ahogy a mai agglomeráció is
          teljesen magyar nyelvterület volt. A 18. század elejére a török
          hódoltságra jellemző folyamatos háborúk és fosztogatások
          megváltoztatták a korábban egységes etnikai térszerkezetet, a
          települések egy része elpusztult, mások elvesztették magyar
          jellegüket, ahogy a főváros is. Az 1715-ös összeírás szerint Buda,
          Pest, Óbuda és Tétény német, Rákospalota magyar, Rákosszentmihály
          szlovák többségű volt, míg Csepel különböző délszláv néptöredékeknek
          adott otthont, akik fokozatos északra húzódása jellemezte a 150 éves
          megszállást. A mai Újpest, Újpalota, Rákosmente és Dél-Pest (Kispest,
          Pesterzsébet, Pestszentlőrinc, Pestszentimre, Soroksár) területe
          lakatlan pusztaként (deserta) volt nyilvántartva. A megfogyatkozott
          népesség pótlása már a török kiűzése után megindult a spontán, belső
          és országhatárokon átnyúló vándormozgalmaknak köszönhetően, az
          újratelepülést segítette a bécsi udvar és a különböző földesurak által
          szervezett telepítési akciók is, amelynek keretében főként katolikus
          németek („svábok”) érkeztek Buda környékére délnémet területekről és a
          Rajna-völgyéből, katolikus és evangélikus szlovákok („tótok”) a
          Felvidékről és kisebb részben, szervezetlenül katolikus magyarok a
          pusztítások által kevésbé érintett területekről (Nyugat-Dunántúl,
          Felvidék, Jászság, Palócföld). Az 1784-es, II. József-féle
          népszámlálás idejére jelentősen nem módosultak a nyelvi és etnikai
          viszonyok, azonban a betelepülések következtében a főváros és
          környékének német jellege erősödött, Csepel és a korábban lakatlan
          Soroksár is német többségű lett, Rákoscsabára szlovákok települtek.
        </p>
      </section>
      <section>
        <div>
          <img src={kep} alt="Ábra Budapest laksságának változásáról" />
        </div>
      </section>
    </div>
  );
}
