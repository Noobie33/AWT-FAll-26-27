import { appConfig } from "@/src/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { AuthUser } from "@/common/interfaces/auth-user.interface";

interface JwtPayload {
    user_id: string;
    name?: string;
    email?: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: appConfig.env.JWT_BEARER_SECRET,
        });
    }

    validate(payload: JwtPayload): AuthUser {
        if (!payload || typeof payload.user_id !== "string" || !payload.user_id) {
            throw new UnauthorizedException("Invalid token payload");
        }
        return {
            id: payload.user_id,
            username: payload.name,
            email: payload.email,
            roles: [],
        };
    }
}
