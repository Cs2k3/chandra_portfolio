export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <div className="page-kicker">projects</div>
          <h2 className="page-title">systems i&apos;ve built.</h2>
        </div>
        <p className="page-subtitle">
          A snapshot of ML platforms, automation frameworks, and intelligent
          systems I&apos;ve worked on — each one shaped how I think about
          reliability, latency, and product impact.
        </p>
      </div>

      <section className="section">
        <div className="section-title">featured</div>
        <div className="card-grid">
          <div className="card">
            <div className="card-label">ml platform</div>
            <div className="card-title">
              SageMaster Pro – Intelligent Data Labeling Dashboard
            </div>
            <div className="card-body">
              An ML-enhanced annotation platform integrated with AWS SageMaker,
              designed to improve labeling throughput and dataset quality.
            </div>
            <ul className="card-bullets">
              <li>
                Increased labeling efficiency by <strong>35%</strong> using
                assisted labeling and smarter task flows.
              </li>
              <li>
                Implemented NLP analytics (keyword frequencies, task insights) to
                surface data issues earlier.
              </li>
              <li>
                Shipped CSV export, role-based access, and real-time analytics
                for operations teams.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-label">data &amp; ml automation</div>
            <div className="card-title">
              Performance Metrics – Data Integration &amp; ML Automation
            </div>
            <div className="card-body">
              A Python/Pandas-based framework for integrating performance
              metrics and automating ML feature pipelines.
            </div>
            <ul className="card-bullets">
              <li>
                Reduced end-to-end processing time by <strong>70%</strong>{" "}
                through vectorized operations and better ETL design.
              </li>
              <li>
                Automated ML pipelines for feature engineering and monitoring,
                improving reliability.
              </li>
              <li>
                Introduced modular architecture for faster debugging and iteration.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-label">ai + iot</div>
            <div className="card-title">
              Robotic Electrical Lamp System – AI / Computer Vision
            </div>
            <div className="card-body">
              A CNN-driven lamp system that predicts ambient light conditions and
              controls lighting intelligently with IoT deployment.
            </div>
            <ul className="card-bullets">
              <li>
                Achieved <strong>92%</strong> accuracy for ambient light
                prediction.
              </li>
              <li>
                Deployed the system on IoT hardware, reducing prediction latency
                by <strong>40%</strong>.
              </li>
              <li>
                Built end-to-end data collection, training, and edge deployment
                pipeline.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
