import React, { useState } from "react";

interface ExerciseEntry {
  exercise: string;
  weight: string;
  unit: "pounds" | "kilograms";
}

const ExerciseForm: React.FC = () => {
  const [entries, setEntries] = useState<ExerciseEntry[]>([
    { exercise: "", weight: "", unit: "pounds" },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof ExerciseEntry,
    value: string
  ) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const addNewEntry = () => {
    setEntries([...entries, { exercise: "", weight: "", unit: "pounds" }]);
  };

  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <select
            value={entry.exercise}
            onChange={(e) =>
              handleInputChange(index, "exercise", e.target.value)
            }
          >
            <option value=''>Select Exercise</option>
            <option value='pushup'>Push-up</option>
            <option value='squat'>Squat</option>
            <option value='deadlift'>Deadlift</option>
            {/* Add other exercises as needed */}
          </select>

          <input
            type='number'
            placeholder='Weight'
            value={entry.weight}
            onChange={(e) => handleInputChange(index, "weight", e.target.value)}
          />

          <select
            value={entry.unit}
            onChange={(e) =>
              handleInputChange(
                index,
                "unit",
                e.target.value as "pounds" | "kilograms"
              )
            }
          >
            <option value='pounds'>Pounds</option>
            <option value='kilograms'>Kilograms</option>
          </select>

          <button onClick={() => console.log("Add logic here")}>Add</button>
        </div>
      ))}

      <button onClick={addNewEntry}>+</button>
    </div>
  );
};

export default ExerciseForm;
