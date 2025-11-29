export default function WorkPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <div className="page-kicker">experience</div>
          <h2 className="page-title">where i&apos;ve shipped value.</h2>
        </div>
        <p className="page-subtitle">
          Roles where I worked with real data, real systems, and real
          stakeholders — across ML, analytics, and frontend experiences.
        </p>
      </div>

      <section className="section">
        <div className="section-title">timeline</div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="card">
              <div className="card-label">now</div>
              <div className="card-title">
                Machine Learning Associate · Amazon Web Services (AWS)
              </div>
              <div className="card-meta">Nov 2024 – Present · Bangalore, India</div>
              <ul className="card-bullets">
                <li>
                  Fine-tuned LLMs in AWS Bedrock, improving accuracy by{" "}
                  <strong>18%</strong> and reducing inference latency by{" "}
                  <strong>22%</strong>.
                </li>
                <li>
                  Developed Python/SQL ETL pipelines processing multi-million-row
                  datasets and improving throughput by <strong>45%</strong>.
                </li>
                <li>
                  Engineered distributed ML training systems handling terabyte-scale
                  datasets with optimized cost/performance.
                </li>
                <li>
                  Automated BI dashboards (Power BI/Tableau) to reduce manual
                  reporting workload by <strong>70%</strong>.
                </li>
                <li>
                  Ran A/B testing and statistical validation, improving model
                  precision by <strong>15%</strong>.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="card">
              <div className="card-label">2025</div>
              <div className="card-title">
                Software Developer Intern · Kodnest Technologies
              </div>
              <div className="card-meta">Jan 2025 – Mar 2025 · Remote</div>
              <ul className="card-bullets">
                <li>
                  Built analytics modules using Java/MySQL, improving data
                  processing speed by <strong>30%</strong>.
                </li>
                <li>
                  Developed interactive real-time dashboards with JavaScript &amp;
                  D3.js.
                </li>
                <li>
                  Optimized SQL queries, reducing page load times by{" "}
                  <strong>40%</strong> across the analytics platform.
                </li>
                <li>
                  Contributed to API development, code reviews, and Agile sprint
                  planning.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="card">
              <div className="card-label">2023</div>
              <div className="card-title">
                Front End Developer Intern · Innovaskill Technologies
              </div>
              <div className="card-meta">Aug 2023 – Nov 2023 · Bangalore, India</div>
              <ul className="card-bullets">
                <li>
                  Built responsive dashboards using HTML, CSS, JavaScript and
                  REST APIs.
                </li>
                <li>
                  Designed validation systems achieving <strong>99.9%</strong>{" "}
                  accuracy for BI reporting pipelines.
                </li>
                <li>
                  Supported CI/CD deployments and UI A/B testing, improving UX
                  metrics by <strong>20%</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">education</div>
        <div className="card">
          <div className="card-title">
            Bachelor of Engineering – Computer Science &amp; Engineering
          </div>
          <div className="card-meta">
            Dr. T Thimmaiah Institute of Technology (VTU), Bangalore · CGPA:
            7.61/10 · 2020 – 2024
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">certifications</div>
        <div className="card-grid">
          <div className="card">
            <div className="card-label">cloud &amp; ml</div>
            <div className="card-body">
              AWS Machine Learning Specialty (In Progress)
            </div>
          </div>
          <div className="card">
            <div className="card-label">data &amp; analytics</div>
            <div className="card-body">
              Google Data Analytics · Power BI Visualization Expert
            </div>
          </div>
          <div className="card">
            <div className="card-label">full stack &amp; ai/ml</div>
            <div className="card-body">
              Kodnest Full Stack &amp; Data Analytics · AWS AI/ML Internship
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
