package com.example.claims;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class ClaimControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Test
  void listsSeededClaims() throws Exception {
    mockMvc.perform(get("/api/claims"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id", equalTo("CLM-1007")));
  }
}
