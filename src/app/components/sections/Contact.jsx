"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
    Mail,
    MapPin,
    Send,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const contactInfo = [

        {
            icon: Mail,
            title: "Email",
            value: "sowmiyapgowda0504@gmail.com", // Change this
            link: "mailto:sowmiyapgowda0504@gmail.com",
        },

        {
            icon: FaLinkedin,
            title: "LinkedIn",
            value: "linkedin.com/in/sowmiya-p-gowda-9b7103369",
            link: "https://linkedin.com/in/sowmiya-p-gowda-9b7103369",
        },

        {
    icon: FaGithub,
    title: "GitHub",
    value: "https://github.com/SOWMIYA-GOWDA/",
    link: "https://github.com/SOWMIYA-GOWDA",
},

        {
            icon: MapPin,
            title: "Location",
            value: "Chennai, Tamil Nadu, India",
            link:"https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0475255,80.2086732,11z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0843007!4d80.2704622!16zL20vMGM4dGs?hl=en&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
        },

    ];

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "sowmiyapgowda0504@gmail.com";

    const subject = encodeURIComponent(form.subject);

    const body = encodeURIComponent(
`Name: ${form.name}

Email: ${form.email}

Message:

${form.message}`
    );

    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");

    setTimeout(() => {
        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }, 300);
};

    return (

        <section
            id="contact"
            className="relative py-32 px-6"
        >

            <div className="max-w-7xl mx-auto">

                {/* ===================== */}
                {/* Section Heading */}
                {/* ===================== */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    className="text-center"

                >

                    <p className="uppercase tracking-[5px] text-blue-400">

                        CONTACT

                    </p>

                    <h2
                        className="
                        mt-4

                        text-5xl

                        font-bold

                        text-white"
                    >

                        Let's Build Something Amazing

                    </h2>

                    <p
                        className="
                        mt-6

                        max-w-3xl

                        mx-auto

                        text-slate-400

                        leading-8"
                    >

                        Interested in collaborating, discussing research,
                        or building AI-powered solutions?
                        Feel free to reach out anytime.

                    </p>

                </motion.div>

                {/* ===================== */}
                {/* Contact Layout */}
                {/* ===================== */}

                <div
                    className="
                    mt-20

                    grid

                    lg:grid-cols-5

                    gap-10"
                >

                    {/* Left Side */}
                    <div className="lg:col-span-2">

                        <motion.div

    initial={{
        opacity: 0,
        x: -40,
    }}

    whileInView={{
        opacity: 1,
        x: 0,
    }}

    viewport={{
        once: true,
    }}

    className="space-y-6"

>

    {contactInfo.map((item) => {

        const Icon = item.icon;

console.log(item.title, Icon);
        
        return (

            <motion.a

                key={item.title}

                href={item.link || "#"}

                target={item.link?.startsWith("http") ? "_blank" : "_self"}

                rel="noopener noreferrer"

                whileHover={{
                    y: -5,
                    scale: 1.02,
                }}

                className="
                group

                flex

                items-center

                gap-5

                rounded-3xl

                border

                border-white/10

                bg-white/5

                backdrop-blur-xl

                p-6

                transition-all

                duration-300

                hover:border-cyan-500/30

                hover:bg-cyan-500/10"

            >

                <div
                    className="
                    flex

                    h-14
                    w-14

                    items-center

                    justify-center

                    rounded-2xl

                    bg-cyan-500/10

                    border

                    border-cyan-500/20"

                >

                    <Icon

                        size={24}

                        className="text-cyan-400"

                    />

                </div>

                <div className="flex-1">

                    <h3
                        className="
                        text-lg

                        font-semibold

                        text-white"
                    >

                        {item.title}

                    </h3>

                    <p
                        className="
                        mt-1

                        text-sm

                        text-slate-400

                        break-all"

                    >

                        {item.value}

                    </p>

                </div>

            </motion.a>

        );

    })}

    {/* Small Info Card */}

    <motion.div

        whileHover={{
            y: -5,
        }}

        className="
        rounded-3xl

        border

        border-cyan-500/20

        bg-gradient-to-br

        from-cyan-500/10

        to-blue-500/10

        backdrop-blur-xl

        p-8"

    >

        <h3
            className="
            text-2xl

            font-bold

            text-white"

        >

            Open to Opportunities

        </h3>

        <p
            className="
            mt-4

            leading-8

            text-slate-300"

        >

            I'm always interested in AI/ML roles,
            research collaborations, innovative
            software projects, and freelance
            opportunities.

        </p>

    </motion.div>

</motion.div>

                    </div>

                    {/* Right Side */}
                    <div className="lg:col-span-3">

                       <motion.form

    initial={{
        opacity: 0,
        x: 40,
    }}

    whileInView={{
        opacity: 1,
        x: 0,
    }}

    viewport={{
        once: true,
    }}

    transition={{
        duration: .5,
    }}

    onSubmit={handleSubmit}

    className="
    rounded-3xl

    border

    border-white/10

    bg-white/5

    backdrop-blur-xl

    p-8"

>

    <h3
        className="
        text-3xl

        font-bold

        text-white"

    >

        Send a Message

    </h3>

    <p
        className="
        mt-3

        text-slate-400"

    >

        Fill out the form below and your default email app
        will open with all the details pre-filled.

    </p>

    {/* Name & Email */}

    <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div>

            <label
                className="
                mb-3

                block

                text-sm

                text-slate-300"

            >

                Full Name

            </label>

            <input

                type="text"

                name="name"

                value={form.name}

                onChange={handleChange}

                required

                placeholder="John Doe"

                className="
                w-full

                rounded-2xl

                border

                border-white/10

                bg-white/5

                px-5

                py-4

                text-white

                outline-none

                transition

                focus:border-cyan-500"

            />

        </div>

        <div>

            <label
                className="
                mb-3

                block

                text-sm

                text-slate-300"

            >

                Email Address

            </label>

            <input

                type="email"

                name="email"

                value={form.email}

                onChange={handleChange}

                required

                placeholder="john@email.com"

                className="
                w-full

                rounded-2xl

                border

                border-white/10

                bg-white/5

                px-5

                py-4

                text-white

                outline-none

                transition

                focus:border-cyan-500"

            />

        </div>

    </div>

    {/* Subject */}

    <div className="mt-6">

        <label
            className="
            mb-3

            block

            text-sm

            text-slate-300"

        >

            Subject

        </label>

        <input

            type="text"

            name="subject"

            value={form.subject}

            onChange={handleChange}

            required

            placeholder="Project Collaboration"

            className="
            w-full

            rounded-2xl

            border

            border-white/10

            bg-white/5

            px-5

            py-4

            text-white

            outline-none

            transition

            focus:border-cyan-500"

        />

    </div>

    {/* Message */}

    <div className="mt-6">

        <label
            className="
            mb-3

            block

            text-sm

            text-slate-300"

        >

            Message

        </label>

        <textarea

            rows={7}

            name="message"

            value={form.message}

            onChange={handleChange}

            required

            placeholder="Tell me about your project or research..."

            className="
            w-full

            resize-none

            rounded-2xl

            border

            border-white/10

            bg-white/5

            px-5

            py-4

            text-white

            outline-none

            transition

            focus:border-cyan-500"

        />

    </div>

    {/* Submit */}

    <motion.button

        whileHover={{
            scale: 1.03,
        }}

        whileTap={{
            scale: .97,
        }}

        type="submit"

        className="
        mt-8

        flex

        w-full

        items-center

        justify-center

        gap-3

        rounded-2xl

        bg-gradient-to-r

        from-cyan-500

        to-blue-600

        px-6

        py-4

        font-semibold

        text-white

        shadow-lg

        transition"

    >

        <Send size={20} />

        Send Message

    </motion.button>

</motion.form>
{/* ===================== */}
{/* Contact Footer */}
{/* ===================== */}

<motion.div

    initial={{
        opacity: 0,
        y: 20,
    }}

    whileInView={{
        opacity: 1,
        y: 0,
    }}

    viewport={{
        once: true,
    }}

    transition={{
        delay: .2,
    }}

    className="
    mt-8

    rounded-3xl

    border

    border-cyan-500/20

    bg-cyan-500/10

    p-6"

>

    <h4
        className="
        text-lg

        font-semibold

        text-white"

    >

        Let's Connect

    </h4>

    <p
        className="
        mt-3

        leading-7

        text-slate-300"

    >

        Whether you have an AI project, research collaboration,
        internship opportunity, or simply want to connect,
        I'm always happy to hear from you.

    </p>

    <div
        className="
        mt-5

        flex

        items-center

        gap-2"

    >

        <span
            className="
            h-2
            w-2

            rounded-full

            bg-green-400"

        />

        <span className="text-sm text-green-400">

            Usually replies within 24 hours

        </span>

    </div>

</motion.div>

                    </div>

                </div>

            </div>

        </section>

    );

}