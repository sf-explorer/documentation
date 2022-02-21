import React, { useState } from "react"
export type Choice = { value: string, label: string }

export type QuizzProps = {
  id: string
  points?: number
  description?: string
  choices?: (Choice | string)[]
  response?: number
  explanation?: string
  course?: string
  colSize?: number
  onSubmitted: Function
  userChoice: (Choice | string)
}

function Quizz(props: QuizzProps) {
  let {
    id,
    points,
    description,
    choices,
    response,
    explanation,
    colSize,
    onSubmitted,
    userChoice,
  } = props
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [answer, setAnswer] = useState(undefined)


  const submitAnswer = async (rank?: number) => {
    if (choices) {
      onSubmitted({ answer: rank })
    } else {
      onSubmitted({ answer })
    }
  }
  const getResponseId = () => {
    // return choices && choices.findIndex((key) => key == completed)
  }
  const resetAnswser = async () => {
    setSelected(null)
    return onSubmitted({ answer: null })
  }

  if (userChoice == null || userChoice == undefined) {
    return (
      <div className="card margin-bottom--xs">
        <div className="card__header">
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>{description}</div>
            {points && (
              <div>
                <span className="badge badge--secondary">{points} pts</span>
                <div></div>
              </div>
            )}
          </div>
        </div>
        <div className="card__body">
          <div className="row">
            {choices &&
              choices.map((value, i) => {
                const label = (value as Choice).label || value
                return (
                  <div
                    key={i}
                    onClick={async (e) => {
                      e.preventDefault()
                      setSelected(i)
                      setError(null)
                      if (response == undefined || selected == response) {
                        await submitAnswer(i)
                      }
                    }}
                    className={`col col--${colSize || 3}`}
                    style={{
                      color:
                        i == selected ? "var(--ifm-color-primary-lighter)" : "",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      checked={i == selected}
                      readOnly
                      id={`${id}_${i}`}
                    />
                    <label htmlFor={`${id}_${i}`}>{label}</label>
                  </div>
                )
              })}
            {!choices && (
              <textarea
                placeholder="Add your response here - markdown is supported"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={3}
                className="margin-left--md margin-right--md"
                style={{ flexGrow: 1, width: "100%", resize: "vertical" }}
              />
            )}
          </div>

          {error && (
            <div className="alert alert--warning margin-top--xs" role="alert">
              <button
                aria-label="Close"
                className="clean-btn close"
                type="button"
                onClick={() => setError(null)}
              >
                <span aria-hidden="true">×</span>
              </button>
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert--success margin-top--xs" role="alert">
              <button
                aria-label="Close"
                className="clean-btn close"
                type="button"
                onClick={() => setSuccess(null)}
              >
                <span aria-hidden="true">×</span>
              </button>
              {success}
            </div>
          )}
        </div>

        {(selected != null || answer) && (
          <div className="card__footer">
            <button
              className="button button--secondary"
              onClick={async () => {
                if (response == undefined || selected == response) {
                  await submitAnswer()
                } else {
                  setError("Wrong value, try again")
                }
                setSelected(null)
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    )
  }


  return (
    <>
      {description}

      <div className="alert alert--secondary" role="alert">
        <button
          aria-label="Close"
          className="clean-btn close"
          type="button"
          title="Remove answer"
          onClick={resetAnswser}
        >
          <span aria-hidden="true">×</span>
        </button>

        {choices && typeof userChoice == "number" && choices[userChoice]
          ? `=> ${choices[userChoice]} ✔️`
          : JSON.stringify(userChoice)}

      </div>
    </>
  )
}

export default Quizz
