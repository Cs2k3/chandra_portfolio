const posts = [
  {
    title: "Tuning LLMs for Latency & Accuracy on AWS Bedrock",
    date: "2025-02-10",
    tags: ["llm", "aws bedrock", "ml engineering"],
    summary:
      "How I approached improving both accuracy and latency of production LLM workloads using Bedrock, evaluation loops, and A/B tests.",
  },
  {
    title: "Designing ETL Pipelines for Multi-Million-Row Datasets",
    date: "2025-01-18",
    tags: ["etl", "data engineering", "python", "sql"],
    summary:
      "Practical patterns for building ETL that can be rerun safely: idempotent jobs, schema contracts, and making failures obvious.",
  },
  {
    title: "From Dashboards to Decisions: Building Metrics That Matter",
    date: "2024-12-05",
    tags: ["analytics", "power bi", "tableau"],
    summary:
      "Thoughts on KPI design, dashboard UX, and helping non-technical stakeholders move from 'nice charts' to clear actions.",
  },
];

export default function BlogPage() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <div className="page-kicker">blog</div>
          <h2 className="page-title">logs from the console.</h2>
        </div>
        <p className="page-subtitle">
          Draft ideas, learnings, and notes from working with LLMs, data
          systems, and analytics products. Think of this as my engineering
          changelog.
        </p>
      </div>

      <section className="section">
        <div className="section-title">recent posts</div>
        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.title} className="blog-item">
              <div className="blog-title">{post.title}</div>
              <div className="blog-meta">
                {post.date} · {post.tags.join(" · ")}
              </div>
              <div className="blog-body">{post.summary}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
