import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import CandidateItem from "../../components/CandidateItem";


export default function DetailParticipant() {
    const router = useRouter();
    const { code } = router.query;
    
    return (
        <div className="container mx-auto">
            <Head>
                <title>Mulai Voting</title>
            </Head>

            <Menu/>

            <div>
                <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>

                {/* <Timer> */}
                <span>Timer</span>
                {/* </Timer> */}

                {/* <Kandidat> */}
                <div className="mt-10 space-y-3 mx-auto w-2/3">
                    <CandidateItem />
                    <CandidateItem />
                    <CandidateItem />
                    <CandidateItem />
                </div>
                {/* </Kandidat> */}


                {/* <Submit> */}
                <div className="text-center mt-10">
                    <Button type="primary" text="Kirim Vote Saya"/>
                </div>
                {/* </Submit> */}
            </div>
        </div>

)
}