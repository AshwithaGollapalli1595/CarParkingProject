import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Building2, MapPin, DollarSign, Hash,
  ChevronLeft, Check, Loader2, AlertCircle,
  Sparkles, LayoutGrid
} from "lucide-react";

/* ─── tiny hook: animated counter on mount ─── */
function useCountUp(target, duration = 800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!target) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [target, duration]);
  return val;
}

/* ─── Floating label input ─── */
function FloatingInput({
  id, label, type = "text", value, onChange,
  placeholder, icon: Icon, prefix, error, required, min
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative group">
      {/* glow border */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: focused ? 1 : 0,
          background: "linear-gradient(135deg,rgba(99,102,241,0.4),rgba(34,211,238,0.2))",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div
        className="relative flex items-center rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: focused
            ? "rgba(99,102,241,0.08)"
            : "rgba(255,255,255,0.04)",
          border: focused
            ? "1px solid rgba(99,102,241,0.5)"
            : error
            ? "1px solid rgba(239,68,68,0.5)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 24px rgba(99,102,241,0.12)" : "none",
        }}
      >
        {/* icon */}
        <div
          className="flex items-center justify-center w-12 h-14 flex-shrink-0 transition-colors duration-300"
          style={{ color: focused ? "#6366f1" : "#475569" }}
        >
          <Icon size={18} />
        </div>

        {/* prefix (₹ / #) */}
        {prefix && (
          <span
            className="text-sm font-medium mr-1 transition-colors duration-300"
            style={{ color: focused ? "#a5b4fc" : "#475569" }}
          >
            {prefix}
          </span>
        )}

        {/* input */}
        <div className="relative flex-1 h-14">
          <label
            htmlFor={id}
            className="absolute left-0 transition-all duration-200 pointer-events-none select-none"
            style={{
              top: active ? "6px" : "50%",
              transform: active ? "translateY(0)" : "translateY(-50%)",
              fontSize: active ? "10px" : "14px",
              color: focused ? "#818cf8" : "#64748b",
              fontWeight: active ? 600 : 400,
              letterSpacing: active ? "0.05em" : "0",
              textTransform: active ? "uppercase" : "none",
            }}
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required={required}
            min={min}
            placeholder={active ? placeholder : ""}
            className="absolute bottom-0 left-0 w-full bg-transparent text-white text-sm outline-none pb-2 pt-5"
          />
        </div>

        {/* tick when filled */}
        {value && !error && (
          <div className="w-10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check size={11} className="text-emerald-400" />
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="flex items-center gap-1 mt-1.5 ml-3 text-red-400 text-xs">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

/* ─── Spot preview grid ─── */
function SpotPreview({ count }) {
  const displayed = Math.min(count || 0, 60);
  const animated = useCountUp(displayed);

  return (
    <div
      className="rounded-2xl p-5 mt-2"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <LayoutGrid size={14} className="text-indigo-400" />
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">
            Spot Preview
          </span>
        </div>
        <span className="text-indigo-400 text-xs font-mono">
          {count > 60 ? `+${count - 60} more` : `${count || 0} spots`}
        </span>
      </div>

      {count > 0 ? (
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(28px, 1fr))" }}
        >
          {Array.from({ length: animated }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md flex items-center justify-center text-[9px] font-bold transition-all"
              style={{
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#34d399",
                animationName: "popIn",
                animationDuration: "0.25s",
                animationTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
                animationFillMode: "both",
                animationDelay: `${i * 12}ms`,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-slate-600">
          <LayoutGrid size={28} className="mb-2 opacity-30" />
          <span className="text-xs">Enter spot count to preview</span>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function LotForm() {
  const { id } = useParams();         // if id exists → edit mode
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", address: "", price: "", totalSpots: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(isEdit);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // mount animation trigger
    setTimeout(() => setMounted(true), 50);

    if (isEdit) {
      // TODO: replace with real API call
      // const data = await getLotById(id);
      setTimeout(() => {
        setForm({ name: "Downtown Parking", address: "42 MG Road, Bangalore", price: "50", totalSpots: "30" });
        setFetchLoading(false);
      }, 800);
    }
  }, [id, isEdit]);

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())        e.name        = "Lot name is required";
    if (!form.address.trim())     e.address     = "Address is required";
    if (!form.price || form.price <= 0) e.price = "Enter a valid price";
    if (!form.totalSpots || form.totalSpots <= 0) e.totalSpots = "Enter at least 1 spot";
    if (form.totalSpots > 500)    e.totalSpots  = "Max 500 spots allowed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // TODO: replace with real API
      // isEdit ? await updateLot(id, form) : await createLot(form);
      await new Promise((r) => setTimeout(r, 1200));
      setSuccess(true);
      setTimeout(() => navigate("/admin/lots"), 1500);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  /* ── Success overlay ── */
  if (success) {
    return (
      <div className="min-h-screen bg-[#080c18] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 animate-pulse-once">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(16,185,129,0.15)",
              border: "2px solid rgba(16,185,129,0.4)",
              boxShadow: "0 0 40px rgba(16,185,129,0.3)",
            }}
          >
            <Check size={36} className="text-emerald-400" />
          </div>
          <p className="text-white text-lg font-semibold">
            Lot {isEdit ? "updated" : "created"} successfully!
          </p>
          <p className="text-slate-500 text-sm">Redirecting to lots...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080c18] text-white">
      <style>{`
        @keyframes popIn {
          from { opacity:0; transform:scale(0.5); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        .slide-up { animation: slideUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .fade-in  { animation: fadeIn 0.4s ease both; }
      `}</style>

      {/* ── Background ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }} />

      {/* ── Page content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">

        {/* Back button */}
        <button
          onClick={() => navigate("/admin/lots")}
          className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors group fade-in"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Lots
        </button>

        {/* Page header */}
        <div
          className="slide-up mb-10"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(99,102,241,0.2)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 20px rgba(99,102,241,0.2)",
              }}
            >
              <Sparkles size={18} className="text-indigo-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {isEdit ? "Edit Parking Lot" : "Create Parking Lot"}
              </h1>
              <p className="text-slate-500 text-sm">
                {isEdit ? `Updating lot #${id}` : "Add a new lot to the system"}
              </p>
            </div>
          </div>
        </div>

        {fetchLoading ? (
          /* Loading skeleton */
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 size={32} className="text-indigo-400 animate-spin" />
            <p className="text-slate-500 text-sm">Loading lot data...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

              {/* ── LEFT: form fields ── */}
              <div className="lg:col-span-3 flex flex-col gap-5">

                {/* Card: Basic info */}
                <div
                  className="rounded-2xl p-6 slide-up"
                  style={{
                    animationDelay: "0.1s",
                    background: "rgba(15,20,40,0.8)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
                    Basic Information
                  </p>
                  <div className="flex flex-col gap-4">
                    <FloatingInput
                      id="name"
                      label="Lot Name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="e.g. Downtown Hub"
                      icon={Building2}
                      error={errors.name}
                      required
                    />
                    <FloatingInput
                      id="address"
                      label="Address"
                      value={form.address}
                      onChange={set("address")}
                      placeholder="e.g. 42 MG Road, Bangalore"
                      icon={MapPin}
                      error={errors.address}
                      required
                    />
                  </div>
                </div>

                {/* Card: Pricing & capacity */}
                <div
                  className="rounded-2xl p-6 slide-up"
                  style={{
                    animationDelay: "0.18s",
                    background: "rgba(15,20,40,0.8)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
                    Pricing & Capacity
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <FloatingInput
                      id="price"
                      label="Price / Hour"
                      type="number"
                      value={form.price}
                      onChange={set("price")}
                      placeholder="0"
                      icon={DollarSign}
                      prefix="₹"
                      error={errors.price}
                      min="1"
                      required
                    />
                    <FloatingInput
                      id="totalSpots"
                      label="Total Spots"
                      type="number"
                      value={form.totalSpots}
                      onChange={set("totalSpots")}
                      placeholder="0"
                      icon={Hash}
                      error={errors.totalSpots}
                      min="1"
                      required
                    />
                  </div>

                  {/* price tag */}
                  {form.price && (
                    <div
                      className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl fade-in"
                      style={{
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      <p className="text-slate-300 text-sm">
                        Daily rate (24h) ={" "}
                        <span className="text-indigo-300 font-semibold">
                          ₹{(form.price * 24).toLocaleString()}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit error */}
                {errors.submit && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm fade-in">
                    <AlertCircle size={15} /> {errors.submit}
                  </div>
                )}

                {/* Actions */}
                <div
                  className="flex items-center gap-3 slide-up"
                  style={{ animationDelay: "0.25s" }}
                >
                  <button
                    type="button"
                    onClick={() => navigate("/admin/lots")}
                    className="flex-1 py-3.5 rounded-xl text-sm font-medium text-slate-300 transition-all duration-200 hover:text-white"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-[2] py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2"
                    style={{
                      background: loading
                        ? "rgba(99,102,241,0.5)"
                        : "linear-gradient(135deg,#6366f1,#4f46e5)",
                      boxShadow: loading
                        ? "none"
                        : "0 4px 24px rgba(99,102,241,0.4)",
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        {isEdit ? "Updating..." : "Creating..."}
                      </>
                    ) : (
                      <>
                        <Check size={15} />
                        {isEdit ? "Update Lot" : "Create Lot"}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ── RIGHT: live preview ── */}
              <div
                className="lg:col-span-2 slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div
                  className="rounded-2xl p-6 sticky top-8"
                  style={{
                    background: "rgba(15,20,40,0.8)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
                    Live Preview
                  </p>

                  {/* Lot card preview */}
                  <div
                    className="rounded-xl p-4 mb-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {form.name || <span className="text-slate-600">Lot Name</span>}
                        </p>
                        <p className="text-slate-500 text-xs mt-0.5 flex items-center gap-1">
                          <MapPin size={10} />
                          {form.address || "Address"}
                        </p>
                      </div>
                      <div
                        className="px-2 py-1 rounded-lg text-xs font-semibold"
                        style={{
                          background: "rgba(16,185,129,0.15)",
                          color: "#34d399",
                          border: "1px solid rgba(16,185,129,0.3)",
                        }}
                      >
                        Open
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-slate-400">
                        <span className="text-white font-semibold">{form.totalSpots || "—"}</span> spots
                      </span>
                      <span className="text-indigo-400 font-semibold">
                        {form.price ? `₹${form.price}/hr` : "₹—/hr"}
                      </span>
                    </div>
                  </div>

                  {/* Spot grid preview */}
                  <SpotPreview count={parseInt(form.totalSpots) || 0} />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}