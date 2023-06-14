import React from "react";
import logo from '../assets/logo_favicon/logo_asset_1.png'
import helix_1 from '../assets/svgs/helix_1.svg'
import helix_2 from '../assets/svgs/helix_2.svg'
import helix_3 from '../assets/svgs/helix_3.svg'
import helix_4 from '../assets/svgs/helix_4.svg'
import helix_5 from '../assets/svgs/helix_5.svg'
import helix_6 from '../assets/svgs/helix_6.svg'
import helix_7 from '../assets/svgs/helix_7.svg'
import helix_8 from '../assets/svgs/helix_8.svg'
import helix_9 from '../assets/svgs/helix_9.svg'
import helix_10 from '../assets/svgs/helix_10.svg'
import helix_11 from '../assets/svgs/helix_11.svg'
import helix_12 from '../assets/svgs/helix_12.svg'
import helix_13 from '../assets/svgs/helix_13.svg'

export default function Index() {
  return (
    <React.Fragment>
      <section>
        <div className="container_1">
          <section>
            <div className="head">
              <div className="hl">
                <img src={logo} alt="" />
              </div>
              <div className="hr">
                <span className="ht">Partners</span>
                <span className="ht">Login</span>
              </div>
            </div>
          </section>
          <section style={{ position: "relative" }}>
            <div className="split_2">
              <div className="sd1">
                <h1 className="abordage text_1">
                  Remote learning driven startup built for Africa
                </h1>
                <img className="svg_1" src={helix_1} alt="" />
                <br />
                <p style={{ fontSize: 22 }}>
                  STX Africa bridges affordable learning for the African economy
                  and collective intellect for African society through edgeless
                  information reach for all people. Be part of the pioneering
                  now.
                </p>
                <div className="sp">
                  <p>30+ students enrolled</p>
                  <p className="dot" />
                  <p>9 professional courses</p>
                </div>
                <img className="svg_2" src={helix_2} alt="" />
              </div>
              <div className="sd2">
                <h3
                  style={{ width: "70%", marginBottom: 10, fontSize: 32 }}
                  className="abordage underline"
                >
                  Sign up
                </h3>
                <div className="form_collection">
                  <div>
                    <input
                      className="f_type_1"
                      type="text"
                      placeholder="Firstname"
                    />
                  </div>
                  <div>
                    <input
                      className="f_type_1"
                      type="text"
                      placeholder="Lastname"
                    />
                  </div>
                  <div>
                    <input
                      className="f_type_1"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                  <br />
                  <div className="button_1">
                    <div className="button_over">Begin a course</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text_liner">
              <p>Select a course . Start. Simple</p>
            </div>
            <div className="scroll_id">
              <lottie-player
                src="https://assets9.lottiefiles.com/private_files/lf30_PaH1bn.json"
                background="transparent"
                speed={1}
                style={{ width: 80 }}
                loop=""
                autoPlay=""
              />
            </div>
          </section>
          <section style={{ minHeight: "100vh" }}>
            <div className="text_liner_2 abordage">
              <span>
                <span className="c_p">Begin</span> with a professional course
              </span>
              <img src={helix_3} alt="" />
            </div>
            <div className="card-container">
              <div className="card">
                <h1 className="card_header">Mobile app developer</h1>
                <p>
                  Gain the skills and knowledge you need to become a successful
                  mobile app developer with our comprehensive courses. Our
                  expert instructors will teach you how to create responsive and
                  user-friendly mobile apps on both iOS and Android platforms,
                  which will enable you to get hired by top mobile app
                  development companies.
                </p>
                <div className="button_1 cw_200">
                  <div className="button_over">Start enrollment</div>
                </div>
              </div>
              <div className="card">
                <h1 className="card_header">Ecommerce manager</h1>
                <p>
                  Enhance your career opportunities in the e-commerce industry
                  with our specialized courses designed for e-commerce managers.
                  Our expert instructors will teach you how to optimize your
                  online store, increase sales, and improve customer experience,
                  which will equip you with the skills to secure a job as an
                  e-commerce manager.
                </p>
                <div className="button_1 cw_200">
                  <div className="button_over">Start enrollment</div>
                </div>
              </div>
              <div className="card">
                <h1 className="card_header">Web developer</h1>
                <p>
                  Launch a rewarding career as a web developer with our
                  comprehensive courses. Our expert instructors will teach you
                  all the skills necessary to become a successful web developer,
                  including the latest web development technologies and
                  programming languages such as HTML, CSS, and JavaScript, which
                  will enable you to get hired by top web development firms.
                </p>
                <div className="button_1 cw_200">
                  <div className="button_over">Start enrollment</div>
                </div>
              </div>
              <div className="card">
                <h1 className="card_header">Data analyst</h1>
                <p>
                  Learn to analyze complex data sets, visualize trends, and
                  create actionable insights with our data analyst courses. Our
                  expert instructors will teach you how to use powerful tools
                  like Python, R, SQL, and Tableau to gain insights into your
                  data and make informed decisions, which will help you secure a
                  job as a data analyst in top companies.
                </p>
                <div className="button_1 cw_200">
                  <div className="button_over">Start enrollment</div>
                </div>
              </div>
              <div className="card">
                <h1 className="card_header">Digital marketer</h1>
                <p>
                  Our digital marketing courses will teach you everything you
                  need to know to become a successful digital marketer and
                  enhance your chances of securing a job in the digital
                  marketing field. From SEO and social media marketing to email
                  marketing and PPC advertising, our expert instructors will
                  guide you through the latest strategies and best practices.
                </p>
                <div className="button_1 cw_200">
                  <div className="button_over">Start enrollment</div>
                </div>
              </div>
              <div className="card">
                <h1 className="card_header">UI/UX designer</h1>
                <p>
                  Our UI/UX design courses will equip you with the skills and
                  knowledge to design intuitive, user-friendly interfaces and
                  engaging user experiences, which will enable you to get hired
                  as a UI/UX designer in top companies.
                </p>
                <div className="button_1 cw_200">
                  <div className="button_over">Start enrollment</div>
                </div>
              </div>
            </div>
            <div className="flow_text">
              <span className="ht">See all</span>
            </div>
          </section>
          <section style={{ minHeight: "100vh" }}>
            <div className="text_liner_3 abordage">
              <span>
                <text className="c_p">Launch</text> your career in tech
              </span>
              <img
                className="helix_4"
                width="120px"
                src={helix_4}
                alt=""
              />
            </div>
            <div className="io_123">
              <p className="io_213">
                At STX Africa, we are doing more than providing learning
                opportunities. We are also helping Africans begin a career in
                tech and other industries by facilitating remote work in any way
                we can.
              </p>
            </div>
            <div className="hx_343">
              <img className="hx_img" src={helix_5} alt="" />
              <ul>
                <li>
                  <span className="ht">Build resume</span>
                </li>
                <li>
                  <span className="ht">Portfolio development</span>
                </li>
                <li>
                  <span className="ht">Portfolio review</span>
                </li>
                <li>
                  <span className="ht">Job search and placement</span>
                </li>
              </ul>
              <img className="hx_img_2" src={helix_6} alt="" />
              <br />
              <div className="button_1 cw_450">
                <div className="button_over">Begin a course</div>
              </div>
            </div>
          </section>
          <section className="space_top_5" style={{ minHeight: "100vh" }}>
            <div className="text_liner_4 abordage">
              <img
                className="helix_7"
                width="120px"
                src={helix_7}
                alt=""
              />

              <span>
                <text className="c_p">We</text> are not alone
              </span>
            </div>
            <div className="io_123">
              <p className="io_213">
                One of our major sponsors is Mbara Ozioma college of technology
                (MOCTECH), IMO state, Nigeria. A technical institution that
                shares our drive to pioneer a new agenda of learning in Africa.
                And what’s more? they are offering testimonials on tested
                technical courses.
              </p>
            </div>
            <br />
            <div className="ip_857">
              <div className="ip_858">
                <img
                  className="helix_8"
                  width="120px"
                  src={helix_8}
                  alt=""
                />
                <div className="button_1 cw_450">
                  <div className="button_over">Visit moctech</div>
                </div>
              </div>
            </div>
            <div className="text_liner_4 abordage space_top_5">
              <span>
                <text className="c_p">But </text>it’s not just tech - it’s
                everything
              </span>
            </div>
            <div className="io_123">
              <p className="io_213">
                You can teach anything, Cooking steps, pet care, medication
                techniques, music lessons...literally anything. Create your own
                courses and build your community on STX Africa. We do all the
                boring, complicated tasks as marketing and outreach, while you
                focus on creativity
              </p>
            </div>
            <img className="helix_9" src={helix_9} alt="" />
            <br />
            <div className="pl_234">
              <h1 className="pl_233">Teach how to</h1>
              <br />
              <br />
              <div className="g_23">
                <div className="g_21">Bake cake</div>
                <div className="g_21">Wash a car</div>
                <div className="g_21">Build a website</div>
                <div className="g_21">Create deepfakes</div>
                <div className="g_21">Create mini controller</div>
                <div className="g_21">Sing “let it go”</div>
              </div>
              <div className="g_54">
                <div>
                  <div className="h_9">
                    <img src={helix_10} alt="" />
                    <h1 className="pl_233 pl_335">What can you teach?</h1>
                    <img src={helix_11} alt="" />
                  </div>
                  <div className="button_1">
                    <div className="button_over">Start creating courses</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section style={{ minHeight: "100vh" }}>
          <div className="lo_434">
            <div>
              <div style={{ color: "#fff" }} className="text_liner_5 abordage">
                <span>
                  <text className="c_p">We </text>are working on amazing sh**
                </span>
              </div>
              <div style={{ width: "100%" }}>
                <img width="100%" src={helix_12} alt="" />
              </div>
            </div>
            <img className="lp_43" src={helix_13} alt="" />
          </div>
          <div className="container_1 center abordage">
            <p className="lp_432">Follow to see what we’re are upto</p>
            <div className="flexed_1">
              <div className="button_1 cw_400">
                <div className="button_over">Follow on instagram</div>
              </div>
              <div className="button_1 cw_400">
                <div className="button_over">Follow on twitter</div>
              </div>
              <div className="button_1 cw_400">
                <div className="button_over">Follow on facebook</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}
