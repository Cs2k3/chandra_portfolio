export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <div className="page-kicker">software dev • ai/ml • data</div>
          <h1 className="hero-main-title">
            building <span className="hero-main-highlight">intelligent</span>{" "}
            systems that scale.
          </h1>
        </div>
        <p className="page-subtitle">
          I&apos;m a Software Development Engineer & AI/ML Engineer with
          experience at Amazon Web Services (AWS), focused on LLM fine-tuning,
          scalable ETL pipelines, and production-grade ML systems on the cloud.
        </p>
      </div>

      <div className="hero-layout">
        <section>
          <p className="hero-body">
            Currently, I work as a <strong>Machine Learning Associate</strong>{" "}
            at <strong>AWS Bangalore</strong>, where I fine-tune LLMs, build
            distributed training setups on terabyte-scale datasets, and ship
            analytics that unlock real decisions for the business.
          </p>
          <div className="hero-tags">
            <span className="tag">LLM fine-tuning</span>
            <span className="tag">distributed ML</span>
            <span className="tag">python · java · sql</span>
            <span className="tag">aws bedrock &amp; sagemaker</span>
            <span className="tag">data engineering &amp; ETL</span>
            <span className="tag">dashboards &amp; BI</span>
          </div>

          <section className="section">
            <div className="section-title">mission</div>
            <div className="section-body">
              To design systems that are <strong>predictable</strong>,{" "}
              <strong>observable</strong>, and{" "}
              <strong>simple to operate</strong> — even when they&apos;re
              handling millions of events and terabytes of data behind the
              scenes.
            </div>
          </section>
        </section>

        <aside className="hero-meta-card">
          <div className="hero-meta-row">
            <div>
              <div className="meta-label">current role</div>
              <div className="meta-value">
                Machine Learning Associate · Amazon Web Services (AWS)
              </div>
            </div>
            <div>
              <div className="meta-label">base stack</div>
              <div className="chip-grid">
                <span className="chip">python</span>
                <span className="chip">java</span>
                <span className="chip">sql</span>
                <span className="chip">javascript</span>
                <span className="chip">pytorch</span>
                <span className="chip">tensorflow</span>
                <span className="chip">scikit-learn</span>
                <span className="chip">aws bedrock</span>
                <span className="chip">sagemaker</span>
                <span className="chip">power bi</span>
                <span className="chip">tableau</span>
              </div>
            </div>
            <div>
              <div className="meta-label">location</div>
              <div className="meta-value">bangalore, india (ist)</div>
            </div>
            <div>
              <div className="meta-label">contact</div>
              <div className="link-row">
                <a href="mailto:cs2k3chandra@gmail.com" className="pill-link">
                  ✉ email
                </a>
                <a href="tel:+918660855375" className="pill-link">
                  ☏ call
                </a>
                <a href="#" className="pill-link">
                  ⧉ linkedin
                </a>
                <a href="#" className="pill-link">
                  𝚐 github
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
