export default function Testimonial({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.author} />
      </div>
      <blockquote className="testimonial-quote">
        "{testimonial.quote}"
      </blockquote>

      <div className="testimonial-author">
        <p className="author-name">{testimonial.author}</p>
        <p className="author-role">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
  );
}
