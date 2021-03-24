package com.ilkengin.boringgame.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ilkengin.boringgame.entity.UserScore;
import com.ilkengin.boringgame.service.UserScoreService;

@RestController
@RequestMapping(path = "/scores")
public class UserScoreController {

	@Autowired
	private UserScoreService userScoreService;

	@GetMapping
	public Iterable<UserScore> getUserScores(Pageable page) {
		return this.userScoreService.getUserScores(page);
	}

	@PostMapping("/{userId}")
	public UserScore updateUserScore(@PathVariable("userId") String userId) {
		return this.userScoreService.updateUserScore(userId);
	}
}
