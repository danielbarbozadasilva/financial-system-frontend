import React from 'react'
import { Grid } from '@material-ui/core'

function Home () {

  const actions = () => null

  return (
    <>
      <Title title='' actions={actions} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
