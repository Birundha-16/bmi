import { useMemo, useState } from "react";

export default function App() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);

  const bmi = useMemo(() => {
    if (!height || !weight) return 0;
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }, [height, weight]);

  const getBmiCategory = (value) => {
    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal weight";
    if (value < 30) return "Overweight";
    return "Obesity";
  };

  const category = getBmiCategory(bmi);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>BMI Calculator</h2>

        <label style={styles.label}>
          Height (cm)
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Weight (kg)
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            style={styles.input}
          />
        </label>

        <div style={styles.resultBox}>
          <p style={styles.resultLabel}>Your BMI</p>
          <h3 style={styles.resultValue}>{bmi ? bmi.toFixed(1) : "0.0"}</h3>
          <p style={styles.category}>{category}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "380px",
    background: "#ffffff",
    padding: "30px 24px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#0f172a",
  },
  label: {
    display: "block",
    marginBottom: "18px",
    color: "#334155",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    marginTop: "8px",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
  },
  resultBox: {
    marginTop: "20px",
    background: "#f1f5f9",
    borderRadius: "12px",
    padding: "18px",
    textAlign: "center",
  },
  resultLabel: {
    margin: 0,
    color: "#475569",
    fontSize: "14px",
  },
  resultValue: {
    margin: "8px 0",
    color: "#0f172a",
    fontSize: "32px",
  },
  category: {
    margin: 0,
    color: "#2563eb",
    fontWeight: "700",
  },
};