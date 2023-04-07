import Head from 'next/head';
import Image from 'next/image';
import Menu from '../../components/Menu';
import Form from '../../components/Form';
import ReactDataPicker, { registerLocale } from 'react-datepicker';
import id from "date-fns/locale/id";
import { useState } from 'react';
registerLocale("id", id);
import "react-datepicker/dist/react-datepicker.css";

export default function CreateVote() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, SetEndDate] = useState(new Date())

    return (
    <div className="container mx-auto">
        <Head>
            <title>Voting baru</title>
        </Head>

        <Menu/>

        <div className='py-10'>
            {/* <Image
            alt="Create Vote"
            src={"/assets/fotos.svg"}
            width={284}
            height={198}
            /> */}
            <h1 className='text-4xl font-bold'>Buat Voting Baru</h1>
            <h2 className='text-zinc-700 mt-3'>
                Silahkan masukan data yang dibutuhkan sebelum membuat vote online
            </h2>

            <form className='flex flex-col'>
                {/* <DetailVote> */}
                <div className='space-y-5'>
                    <h3 className='font-medium text-xl mt-10'>Detail Voting</h3>
                    <div className='flex flex-col'>
                        <label className='text-sm mt-5'>Judul</label>

                        <Form
                            onChange={() => {}}
                            value={""}
                            placherHolder={"Contoh : Voting Calon Gubernur"}
                            className={"mt-01 w-1/2"}
                        />
                    </div>

                    <div className='flex flex-col w-2/3'>
                        <label className='text-sm'>Kapan dimulai?</label>
                        <div className='inline-flex'>
                            <ReactDataPicker
                            locale={"id"}
                            showTimeSelect
                            selected={startDate}
                            onChange={(date) => date && setStartDate(date)}
                            dateFormat={"Pp"}
                            minDate={new Date()}
                            className={"w-full bg-zinc-100 py-2 px-3"}
                            />

                            <span className='text-sm text-center p-3'>Sampai</span>
                            <ReactDataPicker
                                locale={"id"}
                                showTimeSelect
                                selected={endDate}
                                onChange={(date) => date && SetEndDate(date)}
                                dateFormat={"Pp"}
                                minDate={startDate}
                                className={"w-full bg-zinc-100 py-2 px-3"}
                                />
                        </div>

                    </div>
                        
                        
                </div>
                {/* </DetailVote> */}

                {/* <Kandidat> */}
                    <h3></h3>
                {/* </Kandidat> */}
            </form>
        </div>
    </div>
);
} 