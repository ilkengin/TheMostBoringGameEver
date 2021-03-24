package com.ilkengin.boringgame.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserScore {

	@Id
	private String userId;
	private double score;

	protected UserScore() {
	}

	public UserScore(String userId, double score) {
		this.userId = userId;
		this.score = score;
	}

	@Override
	public String toString() {
		return String.format("UserScore[userId='%s', score=%d]", userId, score);
	}

	public String getUserId() {
		return userId;
	}

	public double getScore() {
		return score;
	}
	
	public void setScore(double score) {
		this.score = score;
	}
	
	public void addScore(double amount) {
		this.score += amount; 
	}
}