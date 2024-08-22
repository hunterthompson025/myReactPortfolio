export default function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}