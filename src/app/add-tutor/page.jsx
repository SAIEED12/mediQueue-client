import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AddTutorForm from "@/components/AddTutorForm";

export const metadata = {
  title: {
    default: "Add new tutor",
  },
  description: "Add Tutors to our database",
};

export default async function AddTutorPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-100/90 to-slate-50/40 dark:from-slate-900/60 dark:to-slate-950/20 p-8 md:p-10 mb-8 border border-slate-200/60 dark:border-slate-800/50 shadow-xs transition-colors duration-300">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 dark:bg-blue-500/5 rounded-full -mr-12 -mt-12 blur-3xl pointer-events-none"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              Add New{" "}
              <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                Tutor
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-xs md:text-sm">
              Register an expert educator profile and configure scheduling slots
              within the platform ecosystem.
            </p>
          </div>
          <div className="shrink-0 self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100/40 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 tracking-wide uppercase transition-colors duration-300">
              Onboarding Portal
            </span>
          </div>
        </div>
      </div>
      <AddTutorForm
        token={token}
        userEmail={session?.user?.email}
        userName={session?.user?.name}
      />
    </div>
  );
}
