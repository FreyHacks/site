import Head from 'next/head';
import EmptyNav from '../../components/EmptyNav';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import styles from '../../styles/Verify.module.css';
import { useRouter } from 'next/router';

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

export default function Verify(params) {
    const [userData, setUserData] = useState(null);
    const code = params.code;
    useEffect(() => {
        if (!code) {
            return;
        }
        fetch(`/api/verify/${code}`)
            .then((res) => {
                if (!res.ok) {
                    setUserData({ "found": false, "data": {} });
                }
                else {
                    res.json().then((data) => {
                        setUserData({ "found": true, "data": data });
                    })
                }
            });
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

export async function getStaticProps({ params }) {
    return { props: params }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}
