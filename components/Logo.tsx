import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";

  return (
    <span className={`inline-flex items-center gap-2.5 font-bold ${className}`}>
      <Image
        src="/images/square-logo.png"
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9 rounded-md object-contain"
      />
      <span className={`text-xl tracking-tight ${textColor}`}>Xeto</span>
    </span>
  );
}
