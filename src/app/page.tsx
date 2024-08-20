import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header.tsx"

export default function Home() {
  return (

    <>

      <Header />


      <div className={styles.hero_section}>
        <div className={styles.slideshow_container}>
          <div className={styles.slide}>
            <Image src="/images/2222.png" alt="Image 1" className="slide-image" width={100} height={300} />
          </div>
        </div>
        <div className={styles.text_overlay}>ロボットで世界を変えていく！</div>

      </div>

      <section className={styles.all_section}>
        <h2 className={styles.home_h2}>HOME</h2>

        <article className={styles.article_design}>

          <h2 className={styles.second_h2}>【自己紹介】</h2>

          <p>
            ・こんにちは！高校生ロボカッパーの、yumeno-robotです。<br />
            <br />
            小さいころから工作が好きで、中学校の時科学部に入部し、ロボット開発に興味を持つようになりました。<br />
            現在は、ソフトウェアからハードウェアまで、幅広く浅くいろいろなことに挑戦しています。<br />

          </p>
        </article>


        <article className={styles.article_design}>

          <h2 className={styles.second_h2}>【活動内容】</h2>
          <p>
            ・現在、私と同じ部活の仲間もう一人で「ロボカップジュニア・ジャパンオープン2025」<br />
            に向けてロボット開発を行っています。
          </p>
        </article>

        <article className={styles.article_design}>

          <h2 className={styles.second_h2}>【参加したイベント(2020年以降)】</h2>

          <p>2020年</p>
          <p>・コロナでいろいろなくなった☆</p>

          <p>2021年</p>
          <p>・市内理科作品展　　【受賞】</p>

          <p>2022年</p>
          <p>・科学の甲子園ジュニア千葉県大会　　【出場】</p>

          <p>2023年</p>
          <p>・ロボカップジュニア千葉ノード大会　【参加】</p>
          <p>・ロボカップジュニア関東ブロック　　【推薦出場】</p>

          <p>2024年</p>
          <p>・ロボカップジュニア千葉ノード大会　【参加】</p>
          <p>・ロボカップジュニア関東ブロック　　【推薦出場】</p>
          <p>・レスキューロボットコンテスト2024　(お手伝い的な何か....)</p>

          <p>2025年</p>
          <p>・これから</p><br />

        </article>
      </section>




      <footer className={styles.main_footer}>
        <p className={styles.main_footer_P}>yumeno-robot</p>
      </footer>


      <script src="/asetts/javascript/script.js"></script>



    </>

  );
}
