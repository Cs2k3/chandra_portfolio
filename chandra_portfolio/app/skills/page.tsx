export default function SkillsPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <div className="page-kicker">skills</div>
          <h2 className="page-title">what i&apos;m good at.</h2>
        </div>
        <p className="page-subtitle">
          A practical mix of software engineering, applied machine learning,
          data engineering, and cloud-native thinking — sharpened through
          real-world projects and production systems.
        </p>
      </div>

      <section className="section">
        <div className="section-title">core engineering</div>
        <div className="card-grid">
          <div className="card">
            <div className="card-label">languages</div>
            <div className="card-title">Python · Java · SQL · JavaScript</div>
            <div className="card-body">
              From backend services to data scripts and analytics tools, I
              prefer writing code that&apos;s simple, explicit, and easy to
              maintain.
            </div>
            <ul className="card-bullets">
              <li>Python for ML pipelines, ETL, and automation</li>
              <li>Java for performant backend and analytics modules</li>
              <li>SQL for query optimization and reporting</li>
              <li>JavaScript for interactive dashboards &amp; UI</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-label">software engineering</div>
            <div className="card-title">
              OOP · DSA · microservices · system design basics
            </div>
            <div className="card-body">
              I reason about systems using clean interfaces, clear ownership,
              and well-defined data contracts.
            </div>
            <ul className="card-bullets">
              <li>Solid understanding of data structures &amp; algorithms</li>
              <li>Experience in modular, testable codebases</li>
              <li>Comfortable with microservice-style architecture patterns</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">ai / ml</div>
        <div className="card-grid">
          <div className="card">
            <div className="card-label">frameworks</div>
            <div className="card-title">
              TensorFlow · PyTorch · Scikit-learn
            </div>
            <div className="card-body">
              I work across experimentation and deployment — not just training
              models, but making them useful.
            </div>
            <ul className="card-bullets">
              <li>Classical ML models for prediction &amp; scoring</li>
              <li>NLP &amp; computer vision experimentation</li>
              <li>Model evaluation, monitoring &amp; iteration</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-label">llms &amp; nlp</div>
            <div className="card-title">
              LLM fine-tuning · prompts · evaluation
            </div>
            <div className="card-body">
              Hands-on experience fine-tuning LLMs on AWS Bedrock and designing
              evaluation loops that balance quality and latency.
            </div>
            <ul className="card-bullets">
              <li>Fine-tuning domain-specific LLMs</li>
              <li>Keyword analytics and insights from text data</li>
              <li>A/B tests and statistical checks for models</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-label">ml ops</div>
            <div className="card-title">ETL · feature engineering · pipelines</div>
            <div className="card-body">
              Turning notebooks into production workflows by focusing on
              reproducibility and observability.
            </div>
            <ul className="card-bullets">
              <li>Python/SQL ETL for multi-million-row datasets</li>
              <li>Feature engineering and data validation checks</li>
              <li>Automated pipelines with monitoring &amp; alerts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">cloud, data &amp; viz</div>
        <div className="card-grid">
          <div className="card">
            <div className="card-label">aws</div>
            <div className="card-title">
              Bedrock · SageMaker · Lambda · EC2 · S3
            </div>
            <div className="card-body">
              I design cloud-native flows that keep cost, reliability, and
              latency in balance.
            </div>
          </div>
          <div className="card">
            <div className="card-label">data engineering</div>
            <div className="card-title">
              ETL · EDA · big data · A/B testing · airflow
            </div>
            <div className="card-body">
              From ingestion to feature stores, I care about schemas, data
              contracts, and clear lineage.
            </div>
          </div>
          <div className="card">
            <div className="card-label">visualization</div>
            <div className="card-title">
              Power BI · Tableau · D3.js · Matplotlib
            </div>
            <div className="card-body">
              I enjoy building dashboards that are not only pretty, but help
              stakeholders decide what to do next.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
