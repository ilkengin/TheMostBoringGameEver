package com.ilkengin.boringgame.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.ilkengin.boringgame.entity.UserScore;

public interface UserScoreRepository extends PagingAndSortingRepository<UserScore, String> {}
