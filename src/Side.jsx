function Side () {

 const summary = [
        {
        "title": "The Error of AI",
        "content": "We are in a new era where AI has come to simplify and make our work easier. With the advancements in artificial intelligence..."
        },
        {
        "title": "The Evolving AI Landscape",
        "content": "The field of AI is constantly evolving, and we are witnessing remarkable breakthroughs. From autonomous vehicles to virtual assistants..."
        },
        {
        "title": "Challenges in AI Adoption",
        "content": "While AI holds great promise, its adoption presents several challenges. One major concern is the potential job displacement caused by automation..."
        },
        {
        "title": "The Human-AI Collaboration",
        "content": "Rather than viewing AI as a replacement for humans, we should embrace the concept of human-AI collaboration..."
        },
        {
        "title": "Ethical Implications of AI",
        "content": "As AI continues to advance, we must address the ethical implications it brings. AI algorithms are trained on data...."
        }
        ];
    return (
        <div className="side">
            <h1 className="side-title">Summary</h1>
        {
            summary.map((summary, index) => (
                <div className="side-content" key={index}>
                    <h3>{summary.title}</h3>
                    <p>{summary.content}</p>
                </div>
            ))
        }
        </div>
    )
}
export default Side;