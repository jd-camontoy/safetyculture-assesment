import Layout from "../components/Layout";
import Head from "next/head";
import { Fragment } from 'react';

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>Assign actions to users and groups - Safety Culture</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="index.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Layout>
        <main className="main">
          <div className="main__breadcrumbs">
            <i className="fa-solid fa-house margin-right-10"></i>
            <ul>
              <li>
                <a href="#">SafetyCulture Knowledge Base</a>
              </li>
              <li>
                <a href="#">Using SafetyCulture</a>
              </li>
              <li>
                <a href="#">Actions</a>
              </li>
              <li className="active">Assign actions to users and groups</li>
            </ul>
          </div>
          <div className="main__content">
            <article className="article">
              <div className="article__details">
                <span className="article__label margin-right-10">Actions</span>
                <p className="article__last-updated">
                  Last updated:{" "}
                  <span className="article__last-updated--date">
                    November 27, 2022
                  </span>
                </p>
              </div>
              <section className="article__section article__section--title">
                <h1>Assign actions to users and groups</h1>
                <p>
                  Learn how to assign actions to users and groups via the web
                  app and the mobile app.
                </p>
              </section>
              <section className="article__section article__section--body">
                <h2>Why assign actions to users and groups?</h2>
                <p className="margin-bottom-40">
                  Sometimes, having more than one person working on a task can
                  get the job done much quicker. Assigning actions to users and
                  groups allows the team to fulfill projects or maintenance
                  tasks faster within the organization.
                </p>
                <div className="article__need-list">
                  <h3>What you'll need</h3>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check margin-right-5"></i>
                      Any <a href="#">SafetyCulture Plan</a>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="article__section article__section--body">
                <h2>Take Note</h2>
                <ul>
                  <li>
                    Assigning an action to a group notifies all users within
                    that group.
                  </li>
                  <li>
                    You won't receive a notification if you assign an action to
                    yourself.
                  </li>
                </ul>
              </section>
              <section className="article__section article__section--body">
                <h2>Assign actions to users and groups</h2>
                <div className="article__tab-component">
                  <div className="article__tab-component-tabs">
                    <div
                      className="article__tab-component-tab active"
                      data-target="tab1"
                    >
                      Web app
                    </div>
                    <div className="article__tab-component-tab" data-target="tab2">
                      Mobile app
                    </div>
                  </div>
                  <div className="article__tab-component-tab-contents">
                    <div
                      className="article__tab-component-content active"
                      data-tab="tab1"
                    >
                      <ol>
                        <li>
                          <a href="#">Log in to the web app</a>
                        </li>
                        <li>
                          <a href="#">Create or update an action</a>
                        </li>
                        <li>
                          In the action details, click the "Assign to users,
                          groups or emails" dropdown menu. If there's already an
                          assignee, select the assignee's name and add more
                          users or groups from the dropdown menu.
                          <img src="http://images.ctfassets.net/wum34wy9buzj/1MPlunkBeDH8rzRrrxTlEM/27c2a968dd111c1f9e10baafdd1f92d6/web-actions-assign-to-users-groups-dec.png" alt="Web app: Assign an action to assignees" />
                        </li>
                        <li>Click Done.</li>
                      </ol>
                    </div>
                    <div
                      className="article__tab-component-content"
                      data-tab="tab2"
                    ></div>
                  </div>
                </div>
              </section>
              <div className="article__need-help-section">
                <h4>Need more help?</h4>
                <div className="article__need-help-actions">
                  <button className="btn btn--primary btn--long">
                    <i className="fa-regular fa-message margin-right-5"></i>
                    Live chat
                  </button>
                  <button className="btn btn--primary btn--long">
                    <i className="fa-regular fa-envelope margin-right-5"></i>
                    Email
                  </button>
                  <button className="btn btn--primary btn--long">
                    <i className="fa-solid fa-phone margin-right-5"></i>
                    Phone
                  </button>
                  <a href="#">
                    <i className="fa-solid fa-users margin-right-5"></i>
                    Ask the community
                  </a>
                </div>
              </div>
              <div className="article__mini-survey">
                <p className="margin-right-10">Was this page helpful?</p>
                <button className="btn btn--secondary btn--hollow">
                  Yes
                  <i className="fa-regular fa-thumbs-up margin-left-5"></i>
                </button>
                <button className="btn btn--secondary btn--hollow margin-left-5">
                  No
                  <i className="fa-regular fa-thumbs-down margin-left-5"></i>
                </button>
                <a className="link link--survey-contact margin-left-10" href="#">
                  Contact Us
                </a>
              </div>
            </article>
            <aside className="aside">
              <div className="aside__article-section-links margin-bottom-40">
                <h4>In this article</h4>
                <ul>
                  <li>
                    <a href="#">Why assign actions to users and groups?</a>
                  </li>
                  <li>
                    <a href="#">Take Note</a>
                  </li>
                  <li>
                    <a href="#">Assign actions to users and groups</a>
                  </li>
                </ul>
              </div>
              <div className="aside__article-section-links">
                <h4>Other Articles</h4>
                <ul className="articles">
                  <li>
                    <a href="#">Why assign actions to users and groups?</a>
                  </li>
                  <li>
                    <a href="#">Take Note</a>
                  </li>
                  <li>
                    <a href="#">Assign actions to users and groups</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}
