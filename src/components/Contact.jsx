import React from "react";

function contact() {
  return (
    <div>
      <>
        <main class="contact" id="contact">
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Message" class="btn" />
          </form>
        </main>
      </>
    </div>
  );
}

export default contact;
