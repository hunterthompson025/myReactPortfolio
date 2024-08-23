export default function Contact() {
    return (
        <div>
            <h2 className="text-start mt-5">Contact</h2>
            <form className="text-start mb-3">
                <div className="text-start mb-3">
                    <label for="name" className="form-label text-start">Name:</label>
                    <input type="text" className="form-control w-50" id="name" />
                </div>
                <div className="text-start mb-3">
                    <label for="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control w-50" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="text-start mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea class="form-control w-50" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-5">Submit</button>
            </form>
        </div>
    );
}