package com.revolut.backend.dto;

public record LoginResponse(
        String token,
        String email
) {
}
