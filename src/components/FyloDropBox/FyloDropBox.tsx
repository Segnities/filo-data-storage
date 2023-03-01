import styles from "./assets/css/index.module.css";

import Logo from "./assets/img/logo.svg";
import Folder from "./assets/img/icon-folder.svg";
import Document from "./assets/img/icon-document.svg";
import Upload from "./assets/img/icon-upload.svg";


function FyloDropBox(): JSX.Element {
    return <div className={styles["fylo-dropbox-container"]}>
        <div>
            <img src={Logo} />
        </div>
        <div className={styles["dropbox-items"]}>
            <div  className={styles["dropbox-item"]}>
                <img src={Document} alt="" />
            </div>
            <div className={styles["dropbox-item"]}>
                <img src={Folder} alt="" />
            </div>
            <div className={styles["dropbox-item"]}>
                <img src={Upload} alt="" />
            </div>
        </div>
    </div>
}

export default FyloDropBox;