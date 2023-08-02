import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      {/* nav section  */}
      <div
        className={`${getNavWidth()} min-h-screen transition-width border border-r`}
      >
        <div className="sticky top-0">
          <Navbar closed={closedNav} />
        </div>
      </div>

      {/* content section */}
      <div className="flex-1 min-h-screen">
        <div className="sticky top-0">
          <div className="flex items-center p-2">
            <button onClick={toggleNav}>
              {closedNav ? (
                <AiOutlineMenuUnfold size={25} />
              ) : (
                <AiOutlineMenuFold size={25} />
              )}
            </button>
            <Searchbar />
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            nesciunt ea earum, alias corrupti eaque animi quod repellat, nam
            fugiat corporis, minima quas itaque quidem? Explicabo, magnam
            debitis! Fuga deserunt aut aliquid veniam neque quam dolorem!
            Corrupti commodi deserunt laudantium quia consequuntur, id tempora
            officia. Tempora aperiam quasi nobis labore eum, quisquam nulla
            sapiente odit nesciunt esse aliquam quae officia, libero vitae quia
            aliquid. Eligendi rem voluptates earum maxime numquam quam incidunt
            quae impedit placeat officia, sequi ut vitae ipsam eaque commodi
            itaque repellendus suscipit ratione modi, voluptate beatae
            reprehenderit porro autem. Iusto quibusdam rem qui excepturi, nemo
            quaerat et tenetur corporis fugit eveniet repudiandae quia pariatur
            quisquam recusandae ipsam perspiciatis dolorem cupiditate eius earum
            doloribus. Magni modi eos tenetur ipsam quidem cumque quam earum
            corporis laborum est quasi, ratione ab nostrum repellat laboriosam
            a? Quaerat ducimus vitae eum libero nostrum quia expedita aut dicta,
            repellendus nihil laborum, odit, dolores perspiciatis cumque
            numquam! Corrupti iusto consequuntur reiciendis accusantium
            distinctio esse! Veniam dolores maiores exercitationem incidunt
            atque molestias sunt dicta, eum, repellat omnis illum nesciunt
            delectus natus magnam iure ullam totam deserunt. In iusto aspernatur
            facilis perferendis illum molestiae voluptatem et dicta alias! Nobis
            facere nihil amet praesentium! Quisquam vel voluptate nostrum
            debitis omnis earum atque laudantium asperiores quidem ipsum error
            nesciunt, aperiam similique nisi consequatur consequuntur sunt
            exercitationem totam facere. Adipisci aperiam quis expedita, numquam
            fuga est assumenda voluptatem tenetur laudantium id et alias
            corporis minus iure explicabo consectetur nihil similique accusamus
            enim provident tempora ratione ducimus. Accusamus dignissimos
            dolorum minima, eius numquam repellat veniam earum! Sit itaque hic
            ea dignissimos totam quisquam asperiores maxime nisi ab quae,
            dolorum autem porro, odit facilis nostrum provident corporis
            deleniti suscipit. Ipsam rerum fugiat eum quasi et? Labore
            architecto tempora est impedit qui illum dignissimos nemo dolor
            deserunt ratione vel magni tenetur eaque natus neque, aliquam culpa
            repudiandae distinctio deleniti nam, veritatis quaerat quae
            inventore? Eligendi eaque vel optio voluptatibus aliquid
            consequuntur deleniti quo quidem accusantium, natus odit recusandae,
            neque, quibusdam repudiandae atque? Blanditiis unde iusto illum
            facilis rerum praesentium, laudantium repellendus excepturi, minima
            cumque porro, quia deleniti veritatis amet sed incidunt. Fuga nihil
            eius molestiae eos, quisquam debitis distinctio blanditiis dolor
            architecto illum nobis dicta facere porro? Hic aperiam, cupiditate
            impedit maxime molestias officiis, sapiente nesciunt dicta in atque
            tenetur optio minima blanditiis nemo magni quia quam reiciendis id a
            repudiandae voluptate? Itaque odit repudiandae, quibusdam, corrupti
            saepe quia provident veniam optio culpa doloribus quam, nihil dicta?
            Dolorem, ducimus? Quisquam tempore quibusdam dolores magni sequi
            consequatur asperiores exercitationem magnam voluptatum, ex id
            deleniti culpa illo quas facere voluptate explicabo mollitia
            reiciendis commodi aperiam repellat. Magnam quae quaerat commodi
            sapiente doloremque adipisci iste laudantium? Natus, voluptates
            sint, illum ullam ipsa, quos aperiam necessitatibus dolor in et
            vitae suscipit repellendus! Perferendis, recusandae fugit.
            Voluptatum sit obcaecati assumenda, quos non exercitationem suscipit
            sed praesentium perspiciatis nesciunt ea porro quo repudiandae
            debitis cupiditate dolore maiores aliquid hic deleniti!
            Necessitatibus beatae expedita quam numquam cupiditate laborum
            sapiente quod odio inventore accusamus dolor, sed animi eaque
            accusantium voluptates ab dolores dolore praesentium sint dolorum
            suscipit, est commodi impedit officia? Soluta hic laudantium,
            temporibus voluptate tenetur, veniam tempora ad sequi, quia
            laboriosam placeat possimus aut inventore perspiciatis quas. Soluta
            labore iusto dolorem. Culpa quas quis fugiat ipsum quos voluptatum
            optio vero in, numquam, saepe cumque nobis aliquam? Eveniet fugit
            doloremque tempore ratione ullam fuga laudantium corrupti, quas sed
            quis ut enim voluptas beatae accusamus quidem cumque magnam
            necessitatibus eligendi unde consectetur? Odio inventore in
            provident quo voluptatum! Minima obcaecati nobis libero similique ea
            velit nemo quam nulla odit atque, voluptatem facere impedit at neque
            dignissimos corporis autem maxime cupiditate pariatur unde expedita.
            Omnis quod obcaecati quasi. Nemo placeat vel accusantium totam
            facere quas consectetur architecto consequuntur odio, veritatis,
            voluptatibus quibusdam harum molestias doloremque. A debitis
            provident vero enim quod beatae earum quae sunt delectus iure,
            inventore magnam architecto, saepe, veritatis cumque molestias
            ratione labore vitae sequi dolorem! Velit optio accusantium quae,
            neque eligendi sint vero nulla voluptas animi autem possimus
            architecto suscipit sapiente nemo impedit, magni non ipsa
            reprehenderit dolorum odit? Neque quasi quae, eaque asperiores
            expedita optio pariatur vitae nihil repellendus sequi distinctio id.
            Sed perspiciatis nobis eos? Facere earum magnam ipsum aliquam aut
            neque itaque ratione ad ipsam excepturi est, odit eaque harum
            suscipit tempora. Odio fugiat, itaque temporibus quidem modi iure
            impedit nulla, dicta minima sed sit cupiditate inventore, quia
            molestias officiis laborum molestiae est quas! Atque vero accusamus
            sequi architecto voluptatem, non eius culpa dolorem eos hic nulla
            quaerat exercitationem quisquam provident veritatis fugiat quam
            earum aspernatur quia aliquam ut iusto voluptatum! Labore cumque
            numquam corrupti animi facere alias dolores magnam. Rerum, officia
            aut? Atque accusantium sapiente facilis, ut explicabo natus tenetur
            recusandae praesentium at reiciendis quibusdam accusamus ullam
            obcaecati sunt nemo hic quisquam architecto. Dolor quos dolorem
            aspernatur corrupti blanditiis ipsam repudiandae fugiat eligendi,
            enim, hic vel similique veritatis ipsum illum. Porro eaque natus
            libero, suscipit enim cum sequi ipsam beatae corporis quia
            praesentium? Repellendus libero voluptatibus quibusdam iste alias
            esse assumenda aut aliquid accusamus, adipisci nam veritatis
            reiciendis obcaecati quae pariatur, molestias, similique quos et!
            Magni architecto aliquam cum eum optio, ducimus, expedita unde
            dolores facere sequi obcaecati corporis possimus ut deserunt iusto
            praesentium maiores provident officia nemo quo? Perferendis,
            tenetur? Ad ullam recusandae, dicta beatae aut veniam sint nihil
            dolorum et minus consectetur itaque! Ut, praesentium ex! Eum quae
            corrupti, nihil alias asperiores in doloribus voluptatum dignissimos
            incidunt consequuntur reiciendis laborum quidem, laboriosam, quod
            eius ipsam nobis aspernatur illo eveniet ad. Porro laudantium vero
            magni, facere nisi ipsum modi consequatur quaerat? Laboriosam veniam
            voluptas dignissimos distinctio autem officiis, velit ab alias
            perferendis quis ea quidem provident necessitatibus repellendus
            ratione sit amet nobis? Vel, quos, expedita beatae, magni et nulla
            est cumque error accusamus fuga dolorem rerum quidem adipisci
            distinctio nemo dolor. Facere ab eligendi quaerat delectus totam
            obcaecati vitae quisquam mollitia provident blanditiis deserunt
            optio perspiciatis accusantium fugiat expedita numquam, explicabo ut
            id. Mollitia autem cumque corporis fuga ex, quae sapiente veritatis
            minima illum impedit numquam quod? Blanditiis odit cum earum harum
            fugit non eum corrupti alias veritatis tempora, consequatur incidunt
            voluptatem quasi omnis ducimus a maiores deserunt atque saepe quae
            doloribus quis libero recusandae at. Adipisci eius odio minus ad
            voluptas eligendi, explicabo ea suscipit error ducimus rerum
            obcaecati itaque temporibus atque debitis distinctio magni! Dolores
            iure earum quaerat, corrupti perspiciatis amet error dolor velit
            harum, soluta commodi obcaecati unde expedita accusantium minus ex
            illum repellat? Eaque, nemo rerum? Nam repellendus iste commodi quos
            facere ad impedit cum quasi, non quisquam qui? Laudantium qui vel
            mollitia quasi repellendus vitae totam, beatae harum temporibus
            dolorem fugit aperiam dolore minima saepe animi nesciunt! Eos
            mollitia nisi velit quibusdam cum, recusandae illum? Quisquam quam
            recusandae exercitationem, sint est praesentium rerum dolor rem
            harum debitis, numquam ducimus sed id aliquam vero dolore? Modi
            debitis quas, non quaerat vitae perferendis earum blanditiis ipsum,
            corporis impedit odit suscipit perspiciatis quos accusamus iste
            laborum voluptatum vero sit reiciendis tenetur enim eligendi et ex?
            Similique nisi quae vero quam rem consectetur, aperiam enim,
            voluptas soluta expedita non quo? Hic aliquam quidem rem et
            accusamus ipsam recusandae similique amet fuga, facilis expedita
            vero veritatis atque ducimus obcaecati blanditiis nemo, maxime porro
            dolorem deserunt doloremque dolores? Facere ratione molestiae
            excepturi odit fugit aliquid perferendis cumque quasi earum ipsam
            rerum natus non explicabo, deleniti quidem. Suscipit quisquam
            eligendi veniam deserunt quos, modi officiis laudantium temporibus
            ea itaque, cum perspiciatis. Vero, saepe illo? Incidunt,
            consequuntur magnam. Ea expedita animi sapiente unde, impedit quidem
            ullam sequi provident id, minima voluptate velit, distinctio odit
            quos modi cupiditate quibusdam veritatis soluta nisi! Perspiciatis
            itaque, veniam nemo impedit asperiores fugiat aperiam cumque
            reprehenderit voluptate mollitia repellendus ratione quisquam eius
            repellat aspernatur similique. Incidunt rem rerum quibusdam soluta!
            In, maxime amet adipisci beatae neque repellendus similique dolor
            repudiandae, laudantium reiciendis numquam rerum impedit hic fugiat!
            Cumque consectetur quod vel adipisci recusandae, similique dicta
            eaque ab! Aspernatur possimus excepturi vitae ratione dolor error
            accusantium quo ex! Corrupti, error, veniam distinctio delectus
            deleniti quaerat ipsum quibusdam omnis non harum repellendus.
            Recusandae sed aliquid fuga laudantium, laborum totam molestias
            voluptate est, eius necessitatibus maxime quibusdam modi
            repellendus? Voluptas facilis amet, nihil a sequi, vero inventore,
            voluptate quos animi molestiae corporis repudiandae quae voluptates
            illo rerum. Debitis iste vel doloremque, hic iusto inventore magnam
            aut temporibus ipsam veniam atque voluptates facilis aspernatur
            consequuntur! Assumenda inventore veritatis odio quaerat ab quas aut
            ducimus incidunt, soluta adipisci modi facere aperiam dolore
            reprehenderit neque distinctio provident enim eius maxime deserunt
            esse. Esse voluptatem in ullam ipsa quam ducimus, sit enim qui
            dolorum! Itaque modi rerum perferendis necessitatibus, quisquam quia
            excepturi voluptate mollitia, dicta, eos numquam aut. Saepe unde
            rerum aut minus officiis inventore illo nobis officia a cum ipsa
            dolore velit vitae iusto, alias deserunt ex. Consequatur,
            perspiciatis molestias. Impedit, deserunt quis. Neque, laboriosam.
            Officia, autem atque. Maiores, ea. Commodi odit distinctio libero
            voluptatibus, autem ipsum ad corporis? Repellendus sed consequuntur
            esse odit fugiat reprehenderit incidunt odio porro nulla ab
            officiis, voluptatem consequatur nam quam quo minima veniam
            molestiae! Cum, rerum animi in asperiores hic dolorum possimus
            repellat quo facere, exercitationem accusamus minus eos illum ex
            adipisci deserunt. Quia optio dolorem aperiam nobis, consequuntur
            ratione nam laboriosam et libero numquam animi asperiores dolor
            accusantium architecto culpa ullam, error quo voluptas? Maxime, modi
            veniam accusantium sapiente facilis temporibus iusto repellendus
            eaque, rerum atque suscipit at, sit nostrum tempora reprehenderit
            mollitia voluptatum. Ex vel molestias facere, alias laudantium, cum
            voluptatem voluptate neque tempore doloribus reiciendis inventore ut
            doloremque autem quisquam assumenda! Ipsum quo quis facilis
            doloremque incidunt tempora, inventore explicabo repudiandae minus
            officiis! Unde odio adipisci quibusdam, magnam quis earum nihil
            nostrum? Voluptatum, velit autem aliquid eius ad commodi consectetur
            aut. Autem quidem sunt incidunt labore! Nobis iusto itaque ipsam
            placeat, nesciunt laudantium reprehenderit! Ducimus natus in
            consectetur corrupti id excepturi magnam quidem culpa odit provident
            nostrum debitis nam, reiciendis optio magni, minima eius quasi
            dolorum deleniti porro incidunt tempore cum. Repellat fuga aut harum
            obcaecati saepe neque amet nam quae, sapiente nihil eligendi tempore
            sint similique id. Tempora fugiat, beatae, nobis illum dolor dolore
            quasi iusto repudiandae mollitia accusantium reiciendis voluptatibus
            qui ipsum expedita cum ratione, officia dolorum modi vitae delectus
            iure error! Ullam ut amet et corporis iusto omnis iste fuga magni
            accusamus recusandae sequi saepe laborum sit sed numquam non,
            aliquam est totam architecto aliquid repudiandae dicta. Deserunt
            culpa explicabo consequatur velit expedita provident cupiditate,
            porro ut eos magni? Dolores sit inventore tenetur nostrum
            accusantium quidem ducimus tempora consequatur, amet, placeat, nemo
            ab! Ducimus aut quae ex tenetur quod doloremque cumque. Impedit
            tenetur officia at earum, odio quidem enim quis ipsum recusandae
            repellendus suscipit ad iste nisi fugit ab saepe, sequi voluptatum,
            non placeat quaerat vel! Autem minus commodi, aperiam aliquam eaque
            magni minima assumenda sed facilis repellat. Tempore ex
            necessitatibus explicabo natus deleniti in odio eveniet. Eligendi
            aspernatur est commodi molestias eius, illo delectus omnis eveniet
            necessitatibus molestiae tempora non officiis ducimus et accusamus
            minima, repudiandae accusantium unde error nihil earum iusto!
            Quisquam repudiandae libero esse eius amet velit saepe minima ad
            ratione nisi perspiciatis sit officiis fugit nobis, totam
            exercitationem non voluptas deserunt cum magni, commodi molestias
            ullam. Similique velit totam eligendi quisquam esse, assumenda iusto
            fuga. Magnam esse iste impedit expedita possimus alias consequuntur
            reiciendis tempore saepe rerum obcaecati numquam eligendi quibusdam,
            deserunt aut quidem deleniti laboriosam pariatur dolores repellendus
            aliquid provident? Eaque eum commodi modi asperiores dolorum? Nemo
            qui architecto dicta veritatis cupiditate maiores quisquam, ab ad
            minima illum nam nobis, quod, iure dolorem molestiae. Dignissimos
            temporibus optio accusantium illum maxime id voluptatum et
            perspiciatis omnis molestias deleniti ipsam sapiente minus modi
            cumque, voluptatem vitae aliquid error dolores quos, ab inventore
            numquam esse quod? Voluptatem rem enim dolor ex eligendi doloribus
            quibusdam ipsam maiores autem nesciunt soluta vero accusamus eveniet
            iste, aliquid magni porro minima. Eligendi ipsum id ducimus, a
            aliquam voluptatibus! Mollitia laboriosam suscipit fugiat tenetur in
            soluta incidunt ea eaque hic, recusandae consequuntur nobis animi
            assumenda beatae illo qui, deleniti autem illum neque reiciendis
            consectetur nostrum! Consectetur nihil perferendis est, molestiae
            laudantium rerum eveniet delectus reiciendis ipsa aperiam, libero
            impedit nam nostrum quam quo quasi mollitia. Blanditiis recusandae
            hic pariatur officiis! Amet labore est qui dolore incidunt
            repudiandae, aliquam deserunt cum, aut numquam nemo nihil voluptatem
            praesentium sapiente possimus magnam dolor. Ut consectetur labore
            numquam, cumque molestiae nemo aut, ea dignissimos explicabo, iste
            modi veniam. Minus qui fuga beatae nihil, a quod ducimus quaerat
            vero debitis hic rem recusandae nesciunt voluptatem officiis alias
            eaque cumque voluptate accusantium excepturi suscipit odio tempore
            iusto sint. Esse tenetur officia asperiores nesciunt consequatur
            veritatis nulla. Unde ducimus, sunt corporis, nobis reprehenderit
            minus facilis perspiciatis facere perferendis molestiae corrupti
            alias, nemo cum! Id veritatis voluptate unde numquam illo, modi
            necessitatibus vel quidem, porro vero magni consectetur. Aperiam
            perferendis esse natus reprehenderit itaque. Reiciendis tempora modi
            non sapiente quod quo fugiat ad cum, esse officia fuga illum quae
            sed, quidem a soluta, reprehenderit ratione voluptatum pariatur
            dolore corrupti. Itaque pariatur ipsa laborum animi aut veritatis
            hic error iste velit ducimus reiciendis similique aperiam ex quia
            cumque voluptates placeat ipsam facilis earum, sapiente totam.
            Pariatur eos, excepturi ipsam amet alias dolorum sunt quisquam quae
            labore temporibus consequuntur dolore! Et accusamus mollitia eius
            earum delectus consequuntur, ex optio facilis similique voluptatibus
            consequatur rem repellendus sunt labore harum architecto maiores
            quisquam. Nesciunt et soluta eum ducimus magni fugit, ullam fuga
            voluptas. Iure illum possimus accusantium blanditiis. Dolor officia
            quos, adipisci tenetur aut provident dicta neque voluptates itaque
            ipsam a laborum, eius similique assumenda esse vitae alias ducimus
            animi minus accusamus reprehenderit facere maiores suscipit.
            Cupiditate autem quam labore ex consequuntur tempore eveniet cumque
            alias quia commodi similique eos cum nihil perspiciatis nemo
            voluptates natus, molestiae, atque vel temporibus! Sint quaerat
            minus placeat consectetur ipsum tenetur nesciunt, doloremque
            quisquam! Perspiciatis praesentium autem officiis quia magnam fuga
            iure laudantium mollitia eaque aperiam, temporibus molestiae quo
            provident cum nesciunt odio natus. Doloremque reprehenderit porro
            dolorem exercitationem vitae placeat nisi, voluptatibus molestiae
            accusantium aspernatur deserunt dolore consequuntur quos distinctio!
            Non, consequuntur! Cumque vero aliquid nostrum similique veniam vel
            modi eaque impedit eum consequuntur sapiente tempore animi ducimus
            asperiores id alias fuga neque voluptatem omnis eveniet, quidem esse
            dolore ea labore. Quia eligendi ratione laborum quo in quaerat,
            repellat, vel animi incidunt nostrum ipsam dolores voluptatum vero
            temporibus cum veniam? Sed, obcaecati fugit consequuntur aliquid
            unde molestias accusamus! Corporis libero, quis recusandae deleniti
            illo, at aut laudantium culpa corrupti enim laboriosam voluptatum
            maiores suscipit nobis sunt incidunt optio commodi in. Rem provident
            dolorem deserunt, consectetur ea reiciendis molestias omnis ipsa,
            debitis corporis delectus illum et culpa ex assumenda amet.
            Laboriosam quia, consequuntur iste, laborum, deserunt dolorem
            inventore tempora autem beatae nostrum quasi repellendus a neque
            quas eveniet placeat quidem. Recusandae, rem vero officia non fugiat
            ut iusto obcaecati optio iste mollitia laborum quasi cumque
            distinctio vitae, nulla laboriosam repellat corporis perferendis
            enim ratione. Expedita sapiente porro officia ducimus quod aliquam
            labore provident illo corrupti cumque commodi sequi quidem dolor
            animi optio magni consequatur illum, natus pariatur eum possimus!
            Culpa quis assumenda ab magnam, hic dicta sed necessitatibus, ut
            fuga itaque id accusamus ad quaerat laudantium excepturi dolor!
            Dolores commodi repellat animi sapiente iusto facere, sint vel error
            totam corporis laborum aperiam? Mollitia, eius veniam quasi
            obcaecati commodi totam necessitatibus ducimus fuga. Corrupti sint
            ducimus excepturi, totam quidem voluptatum nobis ad sunt non, amet
            quod tenetur dignissimos error nam repudiandae assumenda, nisi quia
            repellendus maiores. Asperiores dolorem voluptatibus in ex sunt id
            eaque praesentium laboriosam commodi. A, adipisci. Nisi beatae
            laborum sed in, ullam hic id esse consequuntur qui nihil consectetur
            incidunt alias molestias dolores laboriosam iure facilis debitis
            eligendi atque cumque corporis iste. Commodi inventore perferendis
            ipsa, neque amet voluptas ipsum voluptatem illo facere
            exercitationem suscipit non. Aspernatur minima tenetur perferendis
            inventore quo sequi necessitatibus architecto consequatur tempore
            soluta in fugiat enim aperiam, eveniet, culpa hic ipsam, excepturi
            et beatae! Sed dolorem laudantium sequi quae placeat fuga odit illo
            harum explicabo blanditiis a est possimus illum architecto unde
            voluptas, in voluptates praesentium ratione qui dolores? Impedit
            voluptate ipsum id totam odio asperiores veniam. At rem dolorem nam
            error corrupti, vero odio, ratione ut modi voluptas culpa tenetur
            laboriosam dolores alias enim quos voluptates suscipit deleniti
            inventore cumque accusantium fugiat neque! Vel in dolorum, sint eos
            facere officia inventore nihil ipsam id recusandae, ducimus cumque
            consectetur, voluptates commodi aliquam? Sapiente natus placeat
            quisquam beatae voluptatum eveniet aut doloribus, corporis iusto
            aperiam fugiat totam labore inventore earum illum, veniam amet!
            Fugit ad obcaecati quae, vel inventore sunt perferendis saepe
            recusandae soluta deserunt, quia dolores iste nulla temporibus
            cupiditate praesentium hic eveniet veritatis! Excepturi, quidem.
            Quisquam fuga labore nam eos illo et nulla voluptas culpa,
            consequuntur odit facere aspernatur. Repellendus voluptatum
            cupiditate, hic laboriosam eum natus eveniet quia iusto nisi.
            Recusandae, temporibus. Eius quia excepturi nostrum id ducimus alias
            non. Necessitatibus placeat repellat, nemo architecto cum vero
            dolore qui perferendis sit repellendus impedit ipsum quam nobis illo
            iusto consequuntur vel aut aliquam fugiat, adipisci a. Dolore
            aspernatur, odio libero molestias iusto unde quo aperiam ipsam odit
            quibusdam asperiores rem ex, perspiciatis veniam fuga, nam
            blanditiis dignissimos veritatis error repellendus cupiditate?
            Iusto, quidem et. Accusamus iusto magni deleniti voluptate
            voluptatum laboriosam, fuga a reiciendis distinctio velit quod harum
            labore molestias, error doloremque deserunt. Nihil itaque earum
            aspernatur, quis ad illum facere reprehenderit aliquid unde? Quam
            necessitatibus dolores deserunt optio ducimus eum doloribus
            provident veritatis ex delectus dolore sunt ipsum obcaecati in sequi
            natus consectetur labore quas incidunt dignissimos perferendis odit,
            accusamus magni sint. Dolorem quia at voluptate delectus veniam aut
            molestias quam et hic dolores ex consequatur asperiores, sequi dolor
            magni. Sed voluptates vitae aliquid soluta, molestias asperiores at
            nulla porro alias optio facilis voluptatum a labore doloremque,
            minima ab dignissimos praesentium obcaecati ex ut facere voluptate.
            Quam enim dolorum sint porro voluptas consequatur dicta explicabo
            laudantium! Amet a repellendus consequatur nobis doloremque? Placeat
            velit atque eaque tenetur saepe nisi cupiditate soluta id incidunt
            explicabo vitae cumque assumenda, officiis aspernatur error!
            Aliquid, reiciendis tempore iusto, id, corrupti voluptates
            distinctio sint numquam dolorem adipisci quaerat. Laborum error
            nesciunt in accusamus dolor facilis non, asperiores laudantium
            veniam vel nihil commodi, tempora enim veritatis. Necessitatibus non
            quis consequatur similique? Nisi vero perferendis enim minima at
            provident iure eligendi. Ex sunt enim placeat optio repellat
            repellendus sed? Illum quibusdam voluptatem iure accusantium quidem
            iusto. Magni nostrum suscipit quisquam velit autem eveniet
            perspiciatis repellendus, dolores nemo. Ut consequatur, impedit
            voluptatem nobis facilis temporibus dolores vero assumenda
            consectetur quae quisquam iste deserunt neque cum eaque ex iusto
            molestiae nostrum animi unde. Sunt consequatur, modi porro
            doloremque sit excepturi suscipit itaque dolorem, laudantium
            voluptate, iusto iste nulla. Unde accusantium sit quas architecto
            natus eaque quam. Similique adipisci veniam rerum quos aperiam
            quasi, dolore magnam eligendi animi temporibus in corrupti ratione
            ad aspernatur, minima assumenda nesciunt repudiandae iusto illo
            cumque eaque! Perspiciatis ullam dolorum rem totam suscipit unde
            magnam molestias veniam quo doloremque repellat reprehenderit
            repudiandae cum non itaque animi, consectetur pariatur nihil omnis
            sapiente dolore corporis incidunt voluptas? Sunt obcaecati alias
            nulla quibusdam repellendus error unde odit, quis iste officiis
            labore voluptate voluptatum recusandae eos optio reiciendis
            laboriosam a sint laborum dolorem aliquam quasi beatae! Animi
            corporis veritatis dolores! Suscipit nam atque repudiandae delectus
            cum ipsum quidem quia incidunt dolore minima ipsam quisquam fugit
            vel rerum fuga illum modi, et quas! Tempore neque omnis quo
            praesentium officiis quam adipisci, est sapiente. Veniam, sit earum
            maxime voluptatibus quia blanditiis incidunt autem nesciunt culpa
            maiores esse itaque, saepe consectetur neque modi cumque, quos iste?
            Ipsa expedita saepe nesciunt nulla nostrum neque iusto. Eveniet
            eaque deleniti laboriosam consequatur non error, obcaecati vel
            dolorum sit sint quo quisquam facere ea quod. Quod delectus
            inventore odio nostrum expedita eius reprehenderit minima est fuga,
            nesciunt iure eos sit veniam, ut, voluptatum minus libero culpa sint
            aperiam corrupti earum quae doloremque. Eligendi voluptate quibusdam
            vitae soluta maxime eveniet nihil amet quasi, dolor, assumenda ullam
            totam dolore velit doloremque hic aut facilis perferendis quaerat,
            at deserunt dolorem. Rerum vero esse ipsam ducimus, culpa quaerat
            assumenda magnam qui reiciendis modi laboriosam tenetur, quasi
            deleniti perspiciatis laudantium recusandae atque. Similique nisi
            quo explicabo repellendus commodi animi quisquam maiores architecto
            nulla tenetur. Rerum fuga eius, amet eaque voluptatibus repellat
            tempora molestias porro voluptatum corporis magnam incidunt error
            aperiam delectus in vel! Corporis dolores recusandae accusamus ea
            velit consequatur error, magni ipsa vel sapiente maxime iusto
            aliquid neque cupiditate optio cumque praesentium. Quidem,
            reprehenderit dolorum laudantium eveniet eligendi aperiam
            accusantium nemo animi at nostrum repellat odit modi, eos asperiores
            quas mollitia aliquam dolores rerum? Voluptate eos ad ut fugiat
            dignissimos ea consequatur quos harum et suscipit ipsam eius
            consectetur blanditiis alias, molestiae quia saepe quasi amet?
            Consectetur autem consequuntur ullam voluptatum corporis rem quod ea
            sapiente fugiat quis error, voluptate, corrupti, sint sunt dolor
            voluptas iste voluptates eveniet dicta blanditiis. Iusto, eveniet?
            Esse placeat nisi in laudantium! Unde ab tempore dicta asperiores,
            officiis iste optio eius odit ullam accusamus quasi corporis error,
            laboriosam provident tempora tenetur sint labore commodi a aut
            distinctio. Repellat, amet. Expedita sapiente facere alias quo
            maiores minima at odio corrupti repellat dolorum voluptates quod
            dicta, hic voluptatibus tempora sed aspernatur! Corrupti, ipsa. Iste
            quas sed nostrum impedit recusandae. Sed voluptate aspernatur
            dolorum delectus asperiores fugiat animi quis eveniet officia, hic,
            facilis quos perferendis et neque quia nihil, voluptatibus ex beatae
            dicta. Expedita laboriosam totam aut perferendis odio quod natus
            odit, veniam sed iusto aspernatur impedit pariatur, eum perspiciatis
            molestiae unde placeat asperiores officia similique iste minus
            deleniti? Dolorem assumenda veniam, autem vel facilis, ut
            repudiandae, dolorum harum cupiditate facere at ex rem inventore
            omnis quidem tenetur accusamus. Pariatur, deserunt sint aspernatur
            blanditiis quas incidunt possimus quam beatae nisi consequatur nobis
            accusantium voluptas delectus tempore. Ipsam tempore fuga minus
            natus repellat odit, vitae obcaecati maxime consequuntur aut! Fugit,
            laborum eveniet voluptas, velit libero provident earum consequatur
            quae voluptate aperiam soluta fugiat. Ipsam eligendi, beatae,
            mollitia repudiandae quod quidem rerum repellat ad labore id nemo
            reprehenderit voluptatem, laudantium repellendus sint velit quisquam
            ea totam voluptas nihil ducimus culpa quasi! Molestias, veniam? Eos
            officiis aliquam dolores delectus odit, fuga placeat blanditiis
            consequuntur eum quod iure ex at, quis numquam debitis minus.
            Facere, asperiores iure. Voluptatem nobis, quibusdam magnam a
            dolores quo amet cupiditate excepturi blanditiis recusandae quos
            modi soluta eius corporis possimus voluptas non. Impedit animi earum
            accusantium tenetur nemo dolores adipisci, rerum nisi iure omnis
            itaque provident quia facilis reprehenderit obcaecati nulla
            doloremque labore pariatur nesciunt. Magnam animi perferendis sit
            odit consequatur ut sequi, dolores fugit facilis, quae eos
            necessitatibus eveniet quidem, dolorem fuga alias placeat a eius
            ratione nostrum iste voluptas est. Eveniet, nesciunt quam vitae nisi
            ipsam earum officiis iste et harum, possimus est repellendus
            expedita nobis nostrum recusandae sed saepe. Eum nostrum
            perspiciatis tempora deleniti? Nisi eaque laudantium recusandae?
            Modi temporibus consectetur praesentium corporis, repudiandae
            eligendi blanditiis sint non, porro earum maiores corrupti! Fugiat
            nobis repudiandae consequatur doloremque sint nemo cum modi ducimus
            dolore commodi doloribus, voluptas voluptatem perspiciatis
            blanditiis dolorum maxime incidunt sapiente repellat nesciunt.
            Explicabo, alias exercitationem eaque quam consequuntur ut, mollitia
            placeat molestiae repellendus perspiciatis rerum possimus voluptate
            laboriosam nostrum nihil ullam soluta accusamus dolore deleniti! Eos
            est doloremque iusto accusantium aliquam vero voluptatum quos
            obcaecati hic iste suscipit, dolor, quaerat explicabo itaque animi
            aperiam harum porro quas sequi fuga velit incidunt corrupti ullam?
            Laudantium optio repudiandae hic dignissimos vel quia placeat dolor
            vero unde sit? Ipsam dicta quaerat sequi soluta fugit assumenda?
            Velit nulla, eveniet sed dolores dolor facere doloremque qui,
            quisquam molestias ducimus illo totam voluptatem. Nisi sapiente
            iusto nobis consectetur praesentium? Beatae natus expedita ullam,
            nulla dignissimos culpa mollitia nihil, velit alias esse fuga,
            necessitatibus nam non aspernatur. Minima porro obcaecati doloribus,
            qui labore inventore architecto vitae ipsam rem soluta maiores illo
            adipisci corrupti ad in tenetur voluptatum distinctio cum. Molestiae
            sunt tempore aut, laboriosam amet earum! Nihil, laborum deleniti
            assumenda dolore saepe magni ipsam aut doloremque officiis nostrum,
            adipisci tenetur, amet quisquam cum! Dignissimos veritatis dolore
            natus reiciendis nesciunt, odit sapiente! Provident dicta excepturi,
            quam odio nulla aliquam distinctio facilis reiciendis impedit sit!
            Nam sequi dicta impedit nostrum maxime odio cumque aliquam hic
            possimus sit. Obcaecati quibusdam numquam necessitatibus rem, quo ea
            quidem eum pariatur distinctio, ut odio impedit expedita animi cum
            optio amet! Esse perferendis commodi, iure beatae error, excepturi
            libero quod fugit nobis est modi impedit nemo quos tempore eum nihil
            vitae consequuntur illum molestiae aliquam dolor inventore!
            Repellat, iusto? Eius voluptates aliquam labore ipsum, totam
            consequuntur quae. Porro, rem dolores? Quidem perspiciatis alias
            asperiores, provident illo ratione quas voluptatum. Minima
            asperiores doloremque ratione repudiandae consequuntur, nihil
            voluptate vitae quos reprehenderit nemo corporis, iste vero labore
            necessitatibus tempore doloribus magnam accusamus odit nobis a
            molestiae quia sint. Ut asperiores totam, neque aut laborum placeat
            incidunt sint perspiciatis eveniet, eum consequuntur aliquid,
            provident a eaque quisquam nostrum repellat dignissimos amet
            exercitationem facere harum ducimus corrupti eligendi? Odit id
            veritatis architecto, pariatur tempora animi unde incidunt velit
            blanditiis reiciendis illo distinctio amet consequatur? Quia nihil
            unde voluptas facere modi quasi laboriosam repellat esse enim
            blanditiis quae saepe, facilis eius! Impedit dolor voluptatem cum
            illo delectus corporis necessitatibus possimus est, alias hic
            molestias. Voluptatum, libero expedita impedit exercitationem,
            similique architecto quibusdam perferendis deleniti molestiae nam
            maxime et hic aliquam sint magnam praesentium fuga recusandae. Quia
            provident esse ratione ullam similique nihil sed ab aspernatur
            quisquam unde. Eos expedita perspiciatis dolore maxime sed magni
            molestias repellendus quos accusantium necessitatibus labore,
            possimus amet beatae ipsa quaerat delectus temporibus numquam itaque
            veritatis quasi! Hic iste mollitia tenetur corrupti aliquid
            adipisci, deserunt nam incidunt quia libero nisi veritatis iure
            officia sapiente dolorem optio quo minus! Id, soluta qui repudiandae
            fugit quos ratione atque. Soluta rerum fugiat nobis possimus fuga
            dolores in quis necessitatibus nihil quae a praesentium nisi, non ad
            dolorem cum maiores quo esse laudantium aperiam perspiciatis. Sunt,
            ducimus minus fuga, quae illo est itaque maiores debitis non sequi
            id consequatur nostrum nihil voluptatem dignissimos placeat! Commodi
            architecto repellendus quae vitae, consequuntur in harum
            voluptatibus veritatis aut voluptatem laudantium alias repellat
            officia fugiat velit excepturi molestiae corporis nobis amet ex
            sequi itaque est tenetur. Velit error repellendus alias corrupti,
            eligendi iusto tempore dolor nobis laboriosam consectetur! Facilis
            libero necessitatibus aperiam laboriosam eius sed dicta sit quos,
            facere voluptatum molestiae ex hic quis doloribus dolorum suscipit
            provident praesentium, natus rem perspiciatis obcaecati aut
            consectetur modi mollitia? Earum ipsam iste saepe. Perferendis
            laudantium ipsum maxime eum quaerat quae, deserunt minus inventore
            aut non harum veniam corrupti pariatur quibusdam debitis dolore ab
            sed. Quis saepe distinctio ut ex laudantium aliquam placeat eum
            ipsum soluta maiores! Saepe, recusandae ducimus explicabo debitis
            nostrum error laborum at minus officia reiciendis voluptatum omnis
            maiores quo eius earum dolor autem, doloribus hic cumque non. Unde
            aspernatur porro non laboriosam est fuga quidem debitis eius
            reiciendis praesentium! Vel consectetur sed alias cum culpa
            accusamus beatae totam officiis, omnis nulla similique dolor
            asperiores saepe fugiat corrupti ducimus explicabo necessitatibus
            optio eos unde quas animi voluptatem maiores! Perspiciatis, ut saepe
            culpa, voluptas sit beatae laborum quae cupiditate quasi error odio
            harum, ea cum veniam est porro! Veniam libero consectetur ratione
            aliquid incidunt voluptates cupiditate atque voluptatem eos
            nesciunt, maxime eum itaque deleniti doloribus adipisci. Ipsam
            dolore, facilis recusandae tempore sint eius debitis. Ullam quas
            illum nam expedita dicta, laboriosam at similique maiores numquam
            officia! Officia illo harum sed eligendi ab voluptas sequi
            repudiandae? Ullam laborum porro aliquam, vitae odio amet atque ipsa
            vel? Consequatur et quia, quibusdam quod ipsum rerum autem earum sit
            iste fugiat debitis voluptates voluptatum repellat repudiandae
            commodi mollitia, animi cum. Quaerat tempore illo, itaque sint
            quisquam fugiat at voluptate, harum rem nesciunt hic quas magni iure
            debitis cupiditate ullam voluptates saepe est consequatur,
            voluptatum pariatur? Eius earum facere in quibusdam expedita
            quaerat, ullam vitae maiores ab non commodi omnis molestiae ducimus,
            nobis debitis quidem dolorem ad! Laborum hic accusamus placeat
            labore illo, voluptates cumque doloribus quos itaque, ullam dolor
            dolorum aperiam nemo iure veniam et praesentium ut excepturi maxime
            ipsam repellat. Vero libero quod obcaecati ut eos maxime corporis,
            distinctio nobis neque doloremque totam minus magnam et iusto
            reprehenderit esse possimus rerum laudantium dolorem autem!
            Provident minus quaerat nam recusandae et iusto aliquam repellat,
            sequi molestiae possimus culpa consequuntur eaque, molestias
            repudiandae quia repellendus, eius ipsum aspernatur voluptatum
            laudantium atque. Recusandae repellendus ipsa praesentium
            perferendis id minima placeat. Odit eos dolores velit dolorum! Odit
            aperiam ducimus natus rem, cupiditate labore cumque reiciendis
            officiis recusandae, deleniti expedita, magni alias. Eos explicabo
            doloremque laudantium nulla voluptatem quidem sed veniam porro
            pariatur. A repellendus ipsam magnam eaque corporis nobis tempore
            neque eius nesciunt! Explicabo voluptatibus recusandae laudantium,
            illum possimus at libero voluptates quos dicta odio adipisci ratione
            officiis enim corporis aut. Blanditiis nam ex minima omnis est,
            tenetur quaerat itaque voluptatibus modi, provident vel doloremque
            autem, sed eius tempora quis quos nisi ab atque? Nesciunt aliquid
            enim molestias est natus impedit, omnis repudiandae quaerat! Illo,
            molestiae dignissimos odit quaerat saepe rerum nobis, repudiandae
            aperiam dolor officiis suscipit quam, voluptate optio quis! Omnis
            aliquid incidunt eligendi, facere, eveniet optio commodi maxime ab,
            quasi beatae deleniti reprehenderit accusamus! Ullam incidunt nihil
            laudantium beatae, eos provident omnis architecto quibusdam dicta
            quis consectetur molestiae aperiam nesciunt perferendis nostrum
            exercitationem est fugit! Impedit, vel magni molestias quia,
            cupiditate delectus ipsam explicabo odit optio vitae culpa tempore
            minima iusto voluptatum consequatur eveniet nesciunt, ipsa illum
            unde. Totam soluta voluptatem, dolor accusamus consectetur voluptas
            autem voluptatibus, quibusdam odit laboriosam incidunt sed quidem
            laborum debitis ut reiciendis nemo nihil praesentium et saepe harum
            a quisquam, voluptates modi! Accusamus animi sequi nesciunt
            doloribus repudiandae quo, perspiciatis earum ipsam quis omnis!
            Totam vel cum repudiandae iste quae sed? Dignissimos accusantium
            vero reprehenderit saepe doloremque voluptas nostrum odio obcaecati
            corporis incidunt, veritatis, possimus a soluta quaerat, dolor
            officiis. Sint assumenda error dolore asperiores deserunt ipsa
            voluptatum! Excepturi cupiditate maiores odio quam nostrum
            voluptates! Vero autem tenetur praesentium nesciunt aperiam, aliquid
            rerum. Facilis sed error modi quod qui vero quo sit libero facere
            voluptates tempore molestias quae inventore laudantium, recusandae
            iusto voluptatem id ducimus itaque natus, obcaecati hic esse
            aspernatur. Eligendi voluptates asperiores aliquam reprehenderit
            autem hic delectus repellendus aperiam. Dolorum culpa, velit maiores
            maxime expedita mollitia quis adipisci doloremque beatae quos
            nesciunt facilis nihil, ipsa quidem blanditiis saepe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
