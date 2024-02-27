import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  highscores: [],
  isScoreUpdated: true
}


export const fetchHighscore = createAsyncThunk('fetchHighscore', async () => {
  const response = await fetch('http://localhost:8080/leaderboard', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return await response.json();
})

export const updateScore = createAsyncThunk('updatescore', async (_, { getState }) => {
  
  const { user } = getState().user; // Accessing user state from Redux store

  const response1 = await fetch(`http://localhost:8080/points/${user.user.username}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })

      const json = await response1.json();
      console.log(json)
  const response = await fetch(`http://localhost:8080/points`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": user.user.username, "Points": json.user.points +1})
        })

})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHighscore.fulfilled, (state, action) => {
      state.highscores = action.payload
    })
    builder.addCase(fetchHighscore.rejected, (state, action) => {
      console.log("Dipanshu")
      state.highscores = action.payload
    })

    builder.addCase(updateScore.fulfilled, (state, action) => {
      state.isScoreUpdated = true;
    })

  }
})


export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer