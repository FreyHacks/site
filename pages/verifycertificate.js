import Head from 'next/head';
import EmptyNav from '../components/EmptyNav';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import styles from '../styles/Verify.module.css';
import { useRouter } from 'next/router';

const participants = {
    "00001": { "name": "Samuel Larsen-Disney", "role": "Judge" },
    "00002": { "name": "Azamat Nurkhojayev", "role": "Judge" },
    "00003": { "name": "Danylo Tomalchov", "role": "Judge" },
    "00004": { "name": "Roman Khaitov", "role": "Judge" },
    "00005": { "name": "Dmytro Budym", "role": "Judge" },
    "00006": { "name": "Andrey Sundukov", "role": "Judge" },
    "00007": { "name": "Maksym Mostovyi", "role": "Judge" },
    "00008": { "name": "Timofey Krestyanov", "role": "Judge" },
    "00009": { "name": "Susmita Dey", "role": "Mentor" },
    "00010": { "name": "Priyodarshinee Moitra", "role": "Mentor" }
}

function UserDisplay(props) {
    console.log(props.data);
    if (!props.data["found"] || Object.keys(props.data).length === 0) {
        return <h2 className={styles.error_message}>The user you were searching for could not be found.</h2>;
    } else {
        return (
            <div className={styles.user_display}>
                <h1 className={styles.user_display__title}>Certificate Verification</h1>
                <h2 className={styles.user_display__subtitle}>Participant's information</h2>
                <ul className={styles.user_display__information_list}>
                    <li className={styles.user_display__information_list__element}>This certificate is valid.</li>
                    <li className={styles.user_display__information_list__element}>
                        <span style={{ "font-weight": "bold" }} >Name:</span> <div style={{ float: "right" }}>{props.data["data"]["name"]}</div>
                    </li>
                    <li className={styles.user_display__information_list__element}>
                        <span style={{ "font-weight": "bold" }} >Role:</span> <div style={{ float: "right" }}>{props.data["data"]["role"]}</div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default function Verify() {
    const [userData, setUserData] = useState(null);
    const router = useRouter();
    const code = router.query.code;
    useEffect(() => {
        console.log(code);
        if (!code || !(code in participants)) {
            setUserData({ "found": false, "data": {} });
        } else {
            setUserData({ "found": true, "data": participants[code] });
        }
    }, [code]);
    return (
        <div className={styles.container}>
            <Head>
                <title>FreyHacks' QR Code Verifier</title>
                <meta name="description" content="QR Code Verifier for FreyHacks." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <EmptyNav />
            <div
                id="contain"
                className="w-screen h-screen bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED]  overflow-x-hidden"
            >
                <main className={styles.main}>
                    {userData && <UserDisplay data={userData} />}
                </main>
            </div>
            <Footer />
        </div>
    )
}