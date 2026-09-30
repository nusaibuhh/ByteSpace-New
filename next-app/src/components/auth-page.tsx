import Image from "next/image";
import Link from "next/link";

type AuthMode = "login" | "register";

type AuthPageProps = {
  mode: AuthMode;
};

const copy = {
  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    heading: "Sign in with ease",
    description:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  register: {
    eyebrow: "Create an Account",
    title: "Welcome to",
    heading: "Sign up and come in",
    description:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
  },
} as const;

function SocialIcon({ kind }: { kind: "facebook" | "google" }) {
  if (kind === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
        <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M21.8 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.5 3-7.8Z" />
      <path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.8-5.6-4.2H3v2.7A10.1 10.1 0 0 0 12 22Z" />
      <path d="M6.4 13.7a6 6 0 0 1 0-3.4V7.6H3a10 10 0 0 0 0 8.8l3.4-2.7Z" />
      <path d="M12 6.1c1.5 0 2.8.5 3.9 1.6l2.9-2.9C17 3.2 14.7 2 12 2a10.1 10.1 0 0 0-9 5.6l3.4 2.7C7.2 7.9 9.4 6.1 12 6.1Z" />
    </svg>
  );
}

function Illustration() {
  return (
    <div className="relative mt-14 h-[600px] w-[500px] max-w-full max-[760px]:hidden">
      <Image
        src="/assets/Course_Card_2.png"
        alt="Build Digital course card"
        width={373}
        height={384}
        className="absolute left-0 top-[90px] rounded-[24px] object-cover"
      />
      <Image
        src="/assets/Course_Card_1.png"
        alt="The Power of Big Data course card"
        width={373}
        height={384}
        className="absolute left-[111px] top-0 z-[2] rounded-[24px] object-cover"
      />
      <Image
        src="/assets/oval.png"
        alt=""
        width={146}
        height={146}
        className="absolute left-[50px] top-10 z-[3]"
      />
      <Image
        src="/assets/pyramid.png"
        alt=""
        width={188}
        height={188}
        className="absolute left-0 top-[420px] z-[3]"
      />
      <Image
        src="/assets/twist.png"
        alt=""
        width={175}
        height={175}
        className="absolute left-[380px] top-[350px] z-[4]"
      />
      <Image
        src="/assets/happy_students.png"
        alt="Happy students"
        width={348}
        height={166}
        className="absolute left-[226px] top-[435px] z-[3] rounded-xl"
      />
    </div>
  );
}

export default function AuthPage({ mode }: AuthPageProps) {
  const content = copy[mode];
  const isLogin = mode === "login";

  return (
    <main className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] grid-cols-[minmax(0,1fr)_580px] items-start gap-x-[135px] px-[120px] pb-[120px] pt-[34px] max-[1200px]:grid-cols-[minmax(0,1fr)_480px] max-[1200px]:gap-x-[60px] max-[1200px]:px-10 max-[1100px]:grid-cols-[minmax(0,1fr)_420px] max-[1100px]:gap-x-10 max-[760px]:grid-cols-1 max-[760px]:px-5 max-[760px]:pb-[60px] max-[760px]:pt-7">
      <section className="relative text-white">
        <Link href="/" className="inline-block">
          <Image
            src="/assets/Header_Logo.png"
            alt="ByteSpace logo"
            width={171}
            height={37}
            priority
            className="mb-12 h-auto w-[171px]"
          />
        </Link>
        <h2 className="mb-[18px] text-xl font-medium">{content.heading}</h2>
        <p className="max-w-[480px] text-lg font-light leading-[1.6]">{content.description}</p>
        <Illustration />
      </section>

      <section className="pt-[86px] max-[760px]:pt-8">
        <div className="flex min-h-[784px] flex-col rounded-[32px] bg-white px-[63px] pb-12 pt-16 text-[#1c1c1c] max-[1100px]:px-10 max-[760px]:min-h-0 max-[760px]:px-6 max-[760px]:pb-8 max-[760px]:pt-10">
          <p className="mb-1 text-lg font-normal text-[#0038e0]">{content.eyebrow}</p>
          <h1 className="mb-11 text-[44px] font-semibold leading-[1.2] max-[760px]:text-[34px]">
            {content.title}
            {!isLogin && (
              <>
                <br />
                ByteSpace
              </>
            )}
          </h1>

          <form className="flex flex-col gap-6" action="#" method="post">
            {!isLogin && <Field id="name" label="Full Name" placeholder="Jamie Davis" />}
            <Field id="email" label="Email" type="email" placeholder="designer@example.com" />
            <Field id="password" label="Password" type="password" placeholder="********" />
            <div className="mt-1 flex justify-end">
              <button
                className="h-[46px] rounded-full bg-[#d4ff1a] px-6 text-lg font-medium text-[#1c1c1c] transition hover:brightness-95 cursor-pointer"
                type="submit"
              >
                {isLogin ? "Sign In" : "Continue"}
              </button>
            </div>
          </form>

          {isLogin && (
            <>
              <div className="mt-[78px] flex items-center gap-[14px] text-sm text-[#9b9ba2]">
                <span className="h-px flex-1 bg-[#e4e4e7]" />
                <span>or</span>
                <span className="h-px flex-1 bg-[#e4e4e7]" />
              </div>
              <div className="mt-7 flex justify-center gap-[14px]">
                {(["facebook", "google"] as const).map((social) => (
                  <button
                    key={social}
                    type="button"
                    aria-label={`Continue with ${social}`}
                    className="grid size-[52px] place-items-center rounded-2xl border border-[#e4e4e7] text-[#1c1c1c] transition hover:border-[#1c1c1c] cursor-pointer"
                  >
                    <SocialIcon kind={social} />
                  </button>
                ))}
              </div>
            </>
          )}

          <p className="mt-auto pt-10 text-center text-base font-light text-[#1c1c1c]">
            {isLogin ? "New user? " : "Already have an account? "}
            <Link className="text-[#0038e0] hover:underline" href={isLogin ? "/register" : "/login"}>
              {isLogin ? "Create an account" : "Login"}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
}) {
  return (
    <label className="block text-sm font-normal text-[#1c1c1c]" htmlFor={id}>
      <span className="mb-2 block">{label}</span>
      <input
        className="h-[52px] w-full rounded-xl border border-[#e4e4e7] px-6 text-lg font-light text-[#1c1c1c] outline-none transition placeholder:text-[#7c7c85] focus:border-[#0038e0] focus:ring-4 focus:ring-[#0038e0]/10"
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
