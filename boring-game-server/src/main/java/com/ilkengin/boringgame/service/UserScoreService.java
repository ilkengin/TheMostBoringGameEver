package com.ilkengin.boringgame.service;

import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.ilkengin.boringgame.entity.UserScore;
import com.ilkengin.boringgame.repository.UserScoreRepository;

@Component
public class UserScoreService {
	@Value("${scores.random.min: #{-1000}}")
	private int min;

	@Value("${scores.random.max: #{1000}}")
	private int max;

	@Autowired
	private UserScoreRepository userScoreRepository;

	public Iterable<UserScore> getUserScores(Pageable page) {
		return userScoreRepository.findAll(page);
	}

	public UserScore updateUserScore(String userId) {
		int newScoreToAdd = ThreadLocalRandom.current().nextInt(min, max + 1);
		UserScore score = userScoreRepository.findById(userId).orElse(new UserScore(userId, 0));
		score.addScore(newScoreToAdd);
		userScoreRepository.save(score);

		return score;
	}
}
