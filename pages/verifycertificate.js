import Head from 'next/head';
import EmptyNav from '../components/EmptyNav';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import styles from '../styles/Verify.module.css';
import { useRouter } from 'next/router';

const participants = {
    "00001": {
        "name": "Samuel Larsen-Disney",
        "role": "Judge"
    },
    "00002": {
        "name": "Azamat Nurkhojayev",
        "role": "Judge"
    },
    "00003": {
        "name": "Danylo Tomalchov",
        "role": "Judge"
    },
    "00004": {
        "name": "Roman Khaitov",
        "role": "Judge"
    },
    "00005": {
        "name": "Dmytro Budym",
        "role": "Judge"
    },
    "00006": {
        "name": "Andrey Sundukov",
        "role": "Judge"
    },
    "00007": {
        "name": "Maksym Mostovyi",
        "role": "Judge"
    },
    "00008": {
        "name": "Timofey Krestyanov",
        "role": "Judge"
    },
    "00009": {
        "name": "Susmita Dey",
        "role": "Mentor"
    },
    "00010": {
        "name": "Priyodarshinee Moitra",
        "role": "Mentor"
    },
    "00011": {
        "name": "Ejay Aguirre",
        "role": "Hacker"
    },
    "00012": {
        "name": "Dhravya Shah",
        "role": "Hacker"
    },
    "00013": {
        "name": "Aahil Shaikh",
        "role": "Hacker"
    },
    "00014": {
        "name": "Andrew Yang",
        "role": "Hacker"
    },
    "00015": {
        "name": "Shaghayan Ravishankar",
        "role": "Hacker"
    },
    "00016": {
        "name": "Matthew Yang",
        "role": "Hacker"
    },
    "00017": {
        "name": "Alexandre Payumo",
        "role": "Hacker"
    },
    "00018": {
        "name": "Adam Cameron",
        "role": "Hacker"
    },
    "00019": {
        "name": "Alice Yu",
        "role": "Hacker"
    },
    "00020": {
        "name": "Emmanuel Omolaja",
        "role": "Hacker"
    },
    "00021": {
        "name": "Raghav Nautiyal",
        "role": "Hacker"
    },
    "00022": {
        "name": "Aryan Shrivastava",
        "role": "Hacker"
    },
    "00023": {
        "name": "Lloraine Umamos",
        "role": "Hacker"
    },
    "00024": {
        "name": "Tejas Jamdade",
        "role": "Hacker"
    },
    "00025": {
        "name": "Noel Das",
        "role": "Hacker"
    },
    "00026": {
        "name": "Tithi Bose",
        "role": "Hacker"
    },
    "00027": {
        "name": "Meliora Ho",
        "role": "Hacker"
    },
    "00028": {
        "name": "Nimai Ponna",
        "role": "Hacker"
    },
    "00029": {
        "name": "Souradeep Banerjee",
        "role": "Hacker"
    },
    "00030": {
        "name": "Ethan Yip",
        "role": "Hacker"
    },
    "00031": {
        "name": "Jason Chen",
        "role": "Hacker"
    },
    "00032": {
        "name": "Reynadi Andreas Priesley",
        "role": "Hacker"
    },
    "00033": {
        "name": "Khushi Shukla",
        "role": "Hacker"
    },
    "00034": {
        "name": "Sean Yang",
        "role": "Hacker"
    },
    "00035": {
        "name": "Anurag Mondal",
        "role": "Hacker"
    },
    "00036": {
        "name": "Luisa Rincon",
        "role": "Hacker"
    },
    "00037": {
        "name": "Crystalyn Choong",
        "role": "Hacker"
    },
    "00038": {
        "name": "Rashaad Akbar",
        "role": "Hacker"
    },
    "00039": {
        "name": "Jia Wang",
        "role": "Hacker"
    },
    "00040": {
        "name": "Noel Das",
        "role": "Hacker"
    },
    "00041": {
        "name": "Harry Qu",
        "role": "Hacker"
    },
    "00042": {
        "name": "Stephen Ni",
        "role": "Hacker"
    },
    "00043": {
        "name": "Ekmin Samaraweera",
        "role": "Hacker"
    },
    "00044": {
        "name": "Rakesh Kunapareddy",
        "role": "Hacker"
    },
    "00045": {
        "name": "Ishita Sakura Yedlapalli",
        "role": "Hacker"
    },
    "00046": {
        "name": "Brayton Lordianto",
        "role": "Hacker"
    },
    "00047": {
        "name": "Paras Mahajan",
        "role": "Hacker"
    },
    "00048": {
        "name": "Xianhui Hu",
        "role": "Hacker"
    },
    "00049": {
        "name": "Drishti Bhandari",
        "role": "Hacker"
    },
    "00050": {
        "name": "Datta Velivela",
        "role": "Hacker"
    },
    "00051": {
        "name": "Zhi-Hahn See",
        "role": "Hacker"
    },
    "00052": {
        "name": "Satish Naikawadi",
        "role": "Hacker"
    },
    "00053": {
        "name": "Sanya T.",
        "role": "Hacker"
    },
    "00054": {
        "name": "Pushkar Yadav",
        "role": "Hacker"
    },
    "00055": {
        "name": "Eva Maria Szabo",
        "role": "Hacker"
    },
    "00056": {
        "name": "Syed Vilayat Ali Rizvi",
        "role": "Hacker"
    },
    "00057": {
        "name": "Nikhil Raja",
        "role": "Hacker"
    },
    "00058": {
        "name": "Mauricio Garza",
        "role": "Hacker"
    },
    "00059": {
        "name": "Hargun Singh",
        "role": "Hacker"
    },
    "00060": {
        "name": "vaibhav varshney",
        "role": "Hacker"
    },
    "00061": {
        "name": "Kanishk Prakash",
        "role": "Hacker"
    },
    "00062": {
        "name": "Riya Agrawal",
        "role": "Hacker"
    },
    "00063": {
        "name": "Jason Kuffler",
        "role": "Hacker"
    },
    "00064": {
        "name": "Ashwat Krishnamoorthy",
        "role": "Hacker"
    },
    "00065": {
        "name": "Jacob Solano",
        "role": "Hacker"
    },
    "00066": {
        "name": "Breyner Rojano",
        "role": "Hacker"
    },
    "00067": {
        "name": "Jenny Ho",
        "role": "Hacker"
    },
    "00068": {
        "name": "Rajeev Krishna",
        "role": "Hacker"
    },
    "00069": {
        "name": "Arjun Sriram",
        "role": "Hacker"
    },
    "00070": {
        "name": "SOMANCHI POORNA SOBHITA",
        "role": "Hacker"
    },
    "00071": {
        "name": "Tanya Dixit",
        "role": "Hacker"
    },
    "00072": {
        "name": "Kanishka Panwar",
        "role": "Hacker"
    },
    "00073": {
        "name": "Layan A Alyas",
        "role": "Hacker"
    },
    "00074": {
        "name": "Dariia Denysenko",
        "role": "Hacker"
    },
    "00075": {
        "name": "Abhishek Kumar",
        "role": "Hacker"
    },
    "00076": {
        "name": "Aadi Patangi",
        "role": "Hacker"
    },
    "00077": {
        "name": "Alan Tai",
        "role": "Hacker"
    },
    "00078": {
        "name": "Jackie tadych",
        "role": "Hacker"
    },
    "00079": {
        "name": "Bala A",
        "role": "Hacker"
    },
    "00080": {
        "name": "Satvik Vejendla",
        "role": "Hacker"
    },
    "00081": {
        "name": "Abhishek Mallick",
        "role": "Hacker"
    },
    "00082": {
        "name": "Victor Chan",
        "role": "Hacker"
    },
    "00083": {
        "name": "Kara Huynh",
        "role": "Hacker"
    },
    "00084": {
        "name": "Anita Yip",
        "role": "Hacker"
    },
    "00085": {
        "name": "Muntazir Rashid",
        "role": "Hacker"
    },
    "00086": {
        "name": "Neil Purohit",
        "role": "Hacker"
    },
    "00087": {
        "name": "Alexa Kayman",
        "role": "Hacker"
    },
    "00088": {
        "name": "Aniruddha Bagchi",
        "role": "Hacker"
    },
    "00089": {
        "name": "Nebras Khan",
        "role": "Hacker"
    },
    "00090": {
        "name": "vaibhav varshney",
        "role": "Hacker"
    },
    "00091": {
        "name": "Suryangsu Chandra",
        "role": "Hacker"
    },
    "00092": {
        "name": "Milton Arenas",
        "role": "Hacker"
    },
    "00093": {
        "name": "Ethan Huang",
        "role": "Hacker"
    },
    "00094": {
        "name": "Anthonesha Forbes",
        "role": "Hacker"
    },
    "00095": {
        "name": "Rin Li",
        "role": "Hacker"
    },
    "00096": {
        "name": "Andrew Dimmee",
        "role": "Hacker"
    },
    "00097": {
        "name": "Gourisankar Shaji",
        "role": "Hacker"
    },
    "00098": {
        "name": "Laahini Addagatla",
        "role": "Hacker"
    },
    "00099": {
        "name": "Mei Lee",
        "role": "Hacker"
    },
    "00100": {
        "name": "Ashmit Rajvansh",
        "role": "Hacker"
    },
    "00101": {
        "name": "Nidhi K",
        "role": "Hacker"
    },
    "00102": {
        "name": "Lazar Stojanović",
        "role": "Hacker"
    },
    "00103": {
        "name": "Anthony Qiu",
        "role": "Hacker"
    },
    "00104": {
        "name": "Nicholas Suh",
        "role": "Hacker"
    },
    "00105": {
        "name": "Muntazir Rashid",
        "role": "Hacker"
    },
    "00106": {
        "name": "Adarsh Krishna",
        "role": "Hacker"
    },
    "00107": {
        "name": "Akksharvan Senthilkumar",
        "role": "Hacker"
    },
    "00108": {
        "name": "Sri Yanamandra",
        "role": "Hacker"
    },
    "00109": {
        "name": "Bhagya Wanni Arachchige",
        "role": "Hacker"
    },
    "00110": {
        "name": "Michelle Kim",
        "role": "Hacker"
    },
    "00111": {
        "name": "Suyog Walunj",
        "role": "Hacker"
    },
    "00112": {
        "name": "James Rivera",
        "role": "Hacker"
    },
    "00113": {
        "name": "Marivi Sifuentes",
        "role": "Hacker"
    },
    "00114": {
        "name": "Jonathan Antonio",
        "role": "Hacker"
    },
    "00115": {
        "name": "Bill Susanto",
        "role": "Hacker"
    },
    "00116": {
        "name": "Siddharth Khanna",
        "role": "Hacker"
    },
    "00117": {
        "name": "Elizaveta Vygovskaia",
        "role": "Hacker"
    },
    "00118": {
        "name": "Haseeb Afzal",
        "role": "Hacker"
    },
    "00119": {
        "name": "Derik Nanthamohan",
        "role": "Hacker"
    },
    "00120": {
        "name": "Nicholas Yesko",
        "role": "Hacker"
    },
    "00121": {
        "name": "Satyajith Kesanapally",
        "role": "Hacker"
    },
    "00122": {
        "name": "Justin Zheng",
        "role": "Hacker"
    },
    "00123": {
        "name": "Stacey Toh",
        "role": "Hacker"
    },
    "00124": {
        "name": "Carlos Hilares",
        "role": "Hacker"
    },
    "00125": {
        "name": "Tiernan O'Grady",
        "role": "Hacker"
    },
    "00126": {
        "name": "Deblina Chattopadhyay",
        "role": "Hacker"
    },
    "00127": {
        "name": "Geer Ma",
        "role": "Hacker"
    },
    "00128": {
        "name": "Kartik Joshi",
        "role": "Hacker"
    },
    "00129": {
        "name": "Suden Prashar",
        "role": "Hacker"
    },
    "00130": {
        "name": "Vincent Aquino",
        "role": "Hacker"
    },
    "00131": {
        "name": "Jennifer Flores",
        "role": "Hacker"
    },
    "00132": {
        "name": "Aditya Bilawar",
        "role": "Hacker"
    },
    "00133": {
        "name": "Linda Xue",
        "role": "Hacker"
    },
    "00134": {
        "name": "Jack Wei",
        "role": "Hacker"
    },
    "00135": {
        "name": "Kathy Pan",
        "role": "Hacker"
    },
    "00136": {
        "name": "Mercy Tanui",
        "role": "Hacker"
    },
    "00137": {
        "name": "Priya Agrawal",
        "role": "Hacker"
    },
    "00138": {
        "name": "Linden Zheng",
        "role": "Hacker"
    },
    "00139": {
        "name": "Evan Wu",
        "role": "Hacker"
    },
    "00140": {
        "name": "Anthony Chen",
        "role": "Hacker"
    },
    "00141": {
        "name": "Mark Ma",
        "role": "Hacker"
    },
    "00142": {
        "name": "Anita Yip",
        "role": "Hacker"
    },
    "00143": {
        "name": "Deepanshu Daksh",
        "role": "Hacker"
    },
    "00144": {
        "name": "Shayak Chakrabarti",
        "role": "Hacker"
    },
    "00145": {
        "name": "Dhruman Gupta",
        "role": "Hacker"
    },
    "00146": {
        "name": "Vaughn Richard",
        "role": "Hacker"
    },
    "00147": {
        "name": "Lucy Low",
        "role": "Hacker"
    },
    "00148": {
        "name": "Naufal Wijanarko",
        "role": "Hacker"
    },
    "00149": {
        "name": "Raghav Gulati",
        "role": "Hacker"
    },
    "00150": {
        "name": "Suyog Walunj",
        "role": "Hacker"
    },
    "00151": {
        "name": "Suyog Walunj",
        "role": "Hacker"
    },
    "00152": {
        "name": "Hazim AL Farouq",
        "role": "Hacker"
    },
    "00153": {
        "name": "Yusra Ahmed",
        "role": "Hacker"
    },
    "00154": {
        "name": "Ahmadar Rafi Moreno",
        "role": "Hacker"
    },
    "00155": {
        "name": "Grace Wang",
        "role": "Hacker"
    },
    "00156": {
        "name": "Duy Nguyen",
        "role": "Hacker"
    },
    "00157": {
        "name": "Sai Pravallika Myneni",
        "role": "Hacker"
    },
    "00158": {
        "name": "Noah Ku",
        "role": "Hacker"
    },
    "00159": {
        "name": "Racheet Pai",
        "role": "Hacker"
    },
    "00160": {
        "name": "Vinayak Abrol",
        "role": "Hacker"
    },
    "00161": {
        "name": "Lavi Avigad",
        "role": "Hacker"
    },
    "00162": {
        "name": "Ansha Prashanth",
        "role": "Hacker"
    },
    "00163": {
        "name": "Yasmin Angel",
        "role": "Hacker"
    },
    "00164": {
        "name": "Jeffrey Lam",
        "role": "Hacker"
    },
    "00165": {
        "name": "Revant Mohanasundaram",
        "role": "Hacker"
    },
    "00166": {
        "name": "Hargun Mujral",
        "role": "Hacker"
    },
    "00167": {
        "name": "Zac Waite",
        "role": "Hacker"
    },
    "00168": {
        "name": "Aritro Saha",
        "role": "Hacker"
    },
    "00169": {
        "name": "Greyson Martyn",
        "role": "Hacker"
    },
    "00170": {
        "name": "Scott Cargoe",
        "role": "Hacker"
    },
    "00171": {
        "name": "Luke Parna-Gile",
        "role": "Hacker"
    },
    "00172": {
        "name": "Edison Qu",
        "role": "Hacker"
    },
    "00173": {
        "name": "Matt Marzano",
        "role": "Hacker"
    },
    "00174": {
        "name": "Kellan MacDonald",
        "role": "Hacker"
    },
    "00175": {
        "name": "Aadi Patangi",
        "role": "Hacker"
    },
    "00176": {
        "name": "Genci Duraku",
        "role": "Hacker"
    },
    "00177": {
        "name": "Jiayi Shen",
        "role": "Hacker"
    },
    "00178": {
        "name": "Manish Kandepalli",
        "role": "Hacker"
    },
    "00179": {
        "name": "Vatsal Dwivedi",
        "role": "Hacker"
    },
    "00180": {
        "name": "Grace Cai",
        "role": "Hacker"
    },
    "00181": {
        "name": "Areeb Emran",
        "role": "Hacker"
    },
    "00182": {
        "name": "Jeremy Chuah",
        "role": "Hacker"
    },
    "00183": {
        "name": "Ishaan Khadse",
        "role": "Hacker"
    },
    "00184": {
        "name": "Jay Bhalala",
        "role": "Hacker"
    },
    "00185": {
        "name": "Bailey Luu",
        "role": "Hacker"
    },
    "00186": {
        "name": "anirudh anup",
        "role": "Hacker"
    },
    "00187": {
        "name": "Shawn Wang",
        "role": "Hacker"
    },
    "00188": {
        "name": "ARYAN SHRIVASTAVA",
        "role": "Hacker"
    },
    "00189": {
        "name": "Sanchita Kiran",
        "role": "Hacker"
    },
    "00190": {
        "name": "Stephen Ni",
        "role": "Hacker"
    },
    "00191": {
        "name": "Dilane Fouakeu Kana",
        "role": "Hacker"
    },
    "00192": {
        "name": "Kshitij Bhatia",
        "role": "Hacker"
    },
    "00193": {
        "name": "Souradeep Banerjee",
        "role": "Hacker"
    },
    "00194": {
        "name": "Sarthak Deshmukh",
        "role": "Hacker"
    },
    "00195": {
        "name": "Azfar Mohamed",
        "role": "Hacker"
    },
    "00196": {
        "name": "Ruhma Hashmi",
        "role": "Hacker"
    },
    "00197": {
        "name": "Yusra Ahmed",
        "role": "Hacker"
    },
    "00198": {
        "name": "Alex Zhang",
        "role": "Hacker"
    },
    "00199": {
        "name": "Duy Nguyen",
        "role": "Hacker"
    },
    "00200": {
        "name": "Joshua Mathew",
        "role": "Hacker"
    },
    "00201": {
        "name": "Vishwa Gaurav",
        "role": "Hacker"
    },
    "00202": {
        "name": "Mary Ann Jose",
        "role": "Hacker"
    },
    "00203": {
        "name": "Shubhankar",
        "role": "Hacker"
    }
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