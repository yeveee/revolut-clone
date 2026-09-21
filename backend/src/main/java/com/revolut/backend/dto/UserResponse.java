package com.revolut.backend.dto;

import com.revolut.backend.entity.User;

import java.time.Instant;

public record UserResponse(
        Long id,
        String email,
        Instant createdAt
) {
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getEmail(), user.getCreatedAt());
    }
}
