import React from "react";
import emailSignUpStyles from "./emailSignUp.module.scss";

const EmailSignup = ({ label }) => (
  <div id="mc_embed_signup" className={emailSignUpStyles.container}>
    <form
      action="https://ryankubik.us17.list-manage.com/subscribe/post?u=9b8c018898653292cbe3711f0&amp;id=57cdfbb895"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className={`validate ${emailSignUpStyles.form}`}
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">
            <input
              type="email"
              name="EMAIL"
              placeholder="email"
              className={`required email ${emailSignUpStyles.email}`}
              id="mce-EMAIL"
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={`button ${emailSignUpStyles.submit}`}
            />
            <span>{label}</span>
          </label>
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_9b8c018898653292cbe3711f0_57cdfbb895"
            tabIndex="-1"
            defaultValue=""
          />
        </div>
      </div>
    </form>
  </div>
);

export default EmailSignup;

/*
export default ({ label }) => (
  <div className={emailSignUpStyles.container}>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/rmkubik"
      method="post"
      target="popupwindow"
      onSubmit={() =>
        window.open('https://buttondown.email/rmkubik', 'popupwindow')
      }
      className={emailSignUpStyles.form}
    >
      <label htmlFor="bd-email" id="bd-email">
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="email"
          className={emailSignUpStyles.email}
        />
        <input
          type="submit"
          value="Subscribe"
          className={emailSignUpStyles.submit}
        />
        <input type="hidden" value="1" name="embed" />
        <span>{label}</span>
      </label>
    </form>
  </div>
);
*/
