package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.model.Token;
import com.iotwatch.auth.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.authentication.rememberme.PersistentRememberMeToken;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenService implements PersistentTokenRepository {

    @Autowired
    TokenRepository tokenRepository;

    @Override
    public void createNewToken(PersistentRememberMeToken token) {
        tokenRepository.save(new Token(null,
                token.getUsername(),
                token.getSeries(),
                token.getTokenValue(),
                token.getDate()));
    }

    @Override
    public void updateToken(String series, String value, Date lastUsed) {
        Token token = tokenRepository.findBySeries(series);
        tokenRepository.save(new Token(token.getId(), token.getUsername(), series, value, lastUsed));
    }

    @Override
    public PersistentRememberMeToken getTokenForSeries(String seriesId) {
        return tokenRepository.findBySeries(seriesId);
    }

    @Override
    public void removeUserTokens(String username) {
        Token token = tokenRepository.findByUsername(username);
        if (token != null) {
            tokenRepository.delete(token);
        }
    }
}
