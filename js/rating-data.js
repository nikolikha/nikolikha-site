// Auto-generated rating logic, derived from the user's Book_Movie_Rater.xlsx
const RATING_SYSTEMS = {
  "movie": {
    "label": "Fiction Movie / Series",
    "categories": [
      {
        "name": "Entertainment Value",
        "weightPct": 40.0,
        "questions": [
          {
            "text": "Did you finish the movie/series?",
            "weight": 0.05,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Were you hooked?",
            "weight": 0.07,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were you excited to see how the story unfolded?",
            "weight": 0.1,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did you rewatch some scenes either because you were intrigued or you liked them very much?",
            "weight": 0.03,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Did you feel emotionally invested (laughed, cried, thrilled)?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it keep your attention throughout (no boredom/skipping)?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it stick in your mind right after watching?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Plot",
        "weightPct": 25.0,
        "questions": [
          {
            "text": "Did it contain problematic themes/messsages?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was the plot interesting?",
            "weight": 0.06,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it contain obvious loopholes?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Is it unique?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was the plot well-structured?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the plot make sense in the supposed movie setting?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were there sufficient buildups to important events?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the plot points tie together and end in a satisfying manner?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was it confusing?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Actors",
        "weightPct": 5.0,
        "questions": [
          {
            "text": "Did the acting feel natural?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the line delivery of characters land?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Do the actors fit their role?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Characters",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Did the characters have defining personalities?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were the main characters well-developed (have strengths, weakness,etc)?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the logic of the characters make sense based on their supposed personalities?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the characters have development throughout the series/film?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "For characters in a romantic relationship, did they have chemistry?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No",
              "NA"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5,
              "NA": 1.0
            }
          },
          {
            "text": "Can you relate or feel empathy towards the characters?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Visuals/Animation/Cinematography",
        "weightPct": 5.0,
        "questions": [
          {
            "text": "Were the scenes pleasing to the eyes?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "If CGI/effects are involved, does it look realistic?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No",
              "NA"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5,
              "NA": 1.0
            }
          },
          {
            "text": "Were the prod sets accurate based on the supposed setting of the film?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Directing/Pacing/Technical Aspects",
        "weightPct": 5.0,
        "questions": [
          {
            "text": "Was the flow of scenes clear?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was the movie's length just right (not too short/long)?",
            "weight": 0.005,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the musical score fit the scene?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the film/series have a clear goal in mind?",
            "weight": 0.005,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were the transitions smooth?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the scenes made you feel the emotion it wanted you to feel?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Recommendabiity/Rewatchability",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Will you recommend this  to others?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Do you think you'll still remember this after 5 years?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Are you willing to spend money to watch this again?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Do you think you'll rewatch this in the future?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "WIll you consider this as one of your faves?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          }
        ]
      }
    ]
  },
  "book": {
    "label": "Fiction Book",
    "categories": [
      {
        "name": "Entertainment Value",
        "weightPct": 40.0,
        "questions": [
          {
            "text": "Did you finish the book?",
            "weight": 0.05,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Did you force yourself to finish the book?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were you hooked?",
            "weight": 0.1,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did you reread some parts because you were intrigued or you liked them very much?",
            "weight": 0.05,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Did you feel emotionally invested (laughed, cried, thrilled)?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it keep your attention throughout (no boredom/skipping)?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it stick in your mind right after reading?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Plot",
        "weightPct": 25.0,
        "questions": [
          {
            "text": "Did it contain problematic themes/messsages?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was the plot interesting?",
            "weight": 0.06,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it contain obvious loopholes?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Is it unique?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was the setting and/or world building well-structured?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the plot make sense in the supposed setting?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were there sufficient buildups to important events?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the plot points tie together and end in a satisfying manner?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was it confusing?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Characters",
        "weightPct": 15.0,
        "questions": [
          {
            "text": "Did the characters have defining personalities?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were the main characters well-developed (have strengths, weakness,etc)?",
            "weight": 0.04,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the logic and dialogue of the characters make sense based on their supposed personalities?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the characters have development throughout the book?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "For characters in a romantic relationship, did they have chemistry?",
            "weight": 0.015,
            "options": [
              "Yes",
              "Kinda",
              "No",
              "NA"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5,
              "NA": 1.0
            }
          },
          {
            "text": "Can you relate or feel empathy towards the characters?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Language/Writing style",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Were there any grammatical errors?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was the pacing and length of book smooth?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were the dialogues believable?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the book have a clear goal in mind?",
            "weight": 0.01,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Is the writing considerably good and engaging?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did you like the writing style?",
            "weight": 0.015,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Recommendability/Re-readability",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Will you recommend this  to others?",
            "weight": 0.03,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Do you think you'll still remember this after 5 years?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Will you buy/keep a physical copy of this book?",
            "weight": 0.015,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Do you think you'll re-read this in the future?",
            "weight": 0.02,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "WIll you consider this as one of your faves?",
            "weight": 0.015,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          }
        ]
      }
    ]
  },
  "nfMovie": {
    "label": "Non-Fiction Movie / Documentary",
    "categories": [
      {
        "name": "Engagement",
        "weightPct": 35.0,
        "questions": [
          {
            "text": "Did it hold your attention from start to finish?",
            "weight": 0.0875,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Did it make you feel something strongly (curiosity, outrage, empathy)?",
            "weight": 0.0875,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was it easy to follow even if the topic was complex?",
            "weight": 0.0875,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it motivate you to think, question, or act afterward?",
            "weight": 0.0875,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          }
        ]
      },
      {
        "name": "Content Quality / Depth",
        "weightPct": 30.0,
        "questions": [
          {
            "text": "Was the topic explored deeply, not just superficially?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were the ideas or narratives clear and cohesive?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were the interviews or footage relevant and powerful?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did you gain new insight or perspective?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Credibility / Balance",
        "weightPct": 15.0,
        "questions": [
          {
            "text": "Were multiple perspectives presented fairly?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it rely on credible sources or experts?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did it avoid manipulation or sensationalism?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Technical / Presentation",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Was the pacing appropriate and editing smooth?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were visuals, graphics, or sound effective in telling the story?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No",
              "NA"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5,
              "NA": 1.0
            }
          },
          {
            "text": "Was narration or host delivery clear and engaging?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the technical aspects enhance rather than distract?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Recommendability / Memorability",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Would you recommend this to others?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Will you remember it years later?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Would you rewatch it or explore related content?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Does it feel impactful or important overall?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          }
        ]
      }
    ]
  },
  "nfBook": {
    "label": "Non-Fiction Book",
    "categories": [
      {
        "name": "Engagement",
        "weightPct": 35.0,
        "questions": [
          {
            "text": "Did it keep your attention throughout?",
            "weight": 0.05,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Was it easy to understand without oversimplifying?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the author present ideas in an engaging way (stories, examples)?",
            "weight": 0.1,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did you feel motivated or inspired to learn more?",
            "weight": 0.1,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          },
          {
            "text": "Did you finish it without forcing yourself?",
            "weight": 0.05,
            "options": [
              "Yes",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0
            }
          }
        ]
      },
      {
        "name": "Content Quality / Depth",
        "weightPct": 30.0,
        "questions": [
          {
            "text": "Were the main ideas clear and well-supported?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did you learn something genuinely new or useful?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were arguments or explanations logical and coherent?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 0.0,
              "No": 1.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was there good balance between evidence and opinion?",
            "weight": 0.075,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Credibility / Balance",
        "weightPct": 15.0,
        "questions": [
          {
            "text": "Were sources or data credible and cited properly?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the author interpret facts fairly (no major bias)?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Were claims consistent with established knowledge?",
            "weight": 0.05,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Writing Style / Structure",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Was the tone appropriate for the subject?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Was pacing good (not too dense or repetitive)?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No",
              "NA"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5,
              "NA": 1.0
            }
          },
          {
            "text": "Was it well-organized with a logical flow?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          },
          {
            "text": "Did the style fit the topic (academic vs. popular)?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Kinda",
              "No"
            ],
            "values": {
              "Yes": 1.0,
              "No": 0.0,
              "Kinda": 0.5
            }
          }
        ]
      },
      {
        "name": "Recommendability / Memorability",
        "weightPct": 10.0,
        "questions": [
          {
            "text": "Would you recommend this book to others?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Do you think you\u2019ll remember its lessons after a few years?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Would you reread or reference it again?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          },
          {
            "text": "Does it feel like an important or valuable read overall?",
            "weight": 0.025,
            "options": [
              "Yes",
              "Most likely",
              "Maybe",
              "Not likely",
              "No"
            ],
            "values": {
              "Yes": 1,
              "Most likely": 0.75,
              "Maybe": 0.5,
              "Not likely": 0.25,
              "No": 0
            }
          }
        ]
      }
    ]
  }
};

if (typeof module !== 'undefined') { module.exports = RATING_SYSTEMS; }
